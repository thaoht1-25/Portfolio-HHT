/* ============================================================
   APP.JS — TỰ ĐỘNG TẠO THƯ VIỆN TỪ PROJECTS
   KHÔNG cần chỉnh file này để thêm dự án!
   Muốn thêm dự án: mở projects.js và thêm một object.
   ============================================================ */

/* 1. Lấy các vùng HTML để chèn bộ lọc, thẻ dự án, hộp xem trước. */
const grid=document.getElementById('projectGrid');
const filters=document.getElementById('categoryFilters');
const modal=document.getElementById('previewModal');
const modalContent=document.getElementById('modalContent');
/* 2. Nhãn hiển thị cho danh mục quen thuộc.
   Danh mục chưa khai báo vẫn tự xuất hiện bằng tên category. */
const categoryNames={slide:'Slide',website:'Website UI',poster:'Poster'};
let selectedCategory='all';
/* 3. Chỉ chấp nhận URL http(s), mailto hoặc đường dẫn tệp tương đối.
   Tránh chèn javascript: vào href/src từ dữ liệu. */
function safeUrl(url){const value=String(url||'').trim();if(!value)return '';if(/^(https?:\/\/|mailto:)/i.test(value))return value;if(!/^[a-z][a-z0-9+.-]*:/i.test(value)&&!value.startsWith('//'))return value;return '';}
/* Thông báo ngắn ở cuối màn hình. */
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),3000)}
function categoryLabel(key){return categoryNames[key]||key.replace(/[-_]/g,' ')}
/* 4. Tạo hình xem trước: có image thì dùng ảnh thật;
   chưa có ảnh thì hiển thị minh họa mẫu theo danh mục. */
function previewMarkup(project){
 if(project.image){const img=document.createElement('img');img.src=safeUrl(project.image);img.alt='Ảnh xem trước: '+project.title;img.loading='lazy';return img;}
 const fallback=document.createElement('div');fallback.className='preview-art '+(project.category==='slide'?'slide':project.category==='website'?'web':'poster');
 if(project.category==='slide')fallback.innerHTML='<div class="mini-pill"></div><div class="mini-title">LEARN<br>DIFFERENTLY.</div><div class="mini-circles"></div>';
 else if(project.category==='website')fallback.innerHTML='<div class="webbar"></div><div class="webhero"><b>Design your<br>next idea.</b><i></i></div>';
 else fallback.innerHTML='<span>CREATIVE SERIES</span><b>MAKE<br>IT<br>MATTER.</b>';
 return fallback;
}
/* 5. TẠO BỘ LỌC TỰ ĐỘNG:
   Set(...) lấy danh mục duy nhất từ PROJECTS; thêm category mới
   vào projects.js sẽ có nút lọc mới ngay khi tải lại trang. */
function renderFilters(){
 filters.replaceChildren();
 const categories=['all',...new Set(PROJECTS.map(p=>p.category).filter(Boolean))];
 if(!categories.includes(selectedCategory))selectedCategory='all';
 categories.forEach(category=>{const button=document.createElement('button');button.type='button';button.className='filter'+(selectedCategory===category?' active':'');button.textContent=category==='all'?'Tất cả dự án ('+PROJECTS.length+')':categoryLabel(category)+' ('+PROJECTS.filter(p=>p.category===category).length+')';button.setAttribute('aria-pressed',String(selectedCategory===category));button.addEventListener('click',()=>{selectedCategory=category;renderFilters();renderProjects()});filters.append(button)});
}
/* 6. TẠO THẺ DỰ ÁN TỰ ĐỘNG:
   - Lọc theo danh mục đang chọn.
   - Tạo ảnh, tiêu đề, mô tả, nút xem trước.
   - Có download mới hiện nút tải; có link mới hiện liên kết.
   - Dùng textContent để hiển thị dữ liệu văn bản an toàn. */
function renderProjects(){
 grid.replaceChildren();
 const visible=PROJECTS.filter(p=>selectedCategory==='all'||p.category===selectedCategory);
 visible.forEach((project,index)=>{
 const article=document.createElement('article');article.className='project';
 const preview=document.createElement('div');preview.className='preview';
 const tag=document.createElement('span');tag.className='preview-label';tag.textContent=categoryLabel(project.category);preview.append(tag,previewMarkup(project));
 const body=document.createElement('div');body.className='project-body';
 const meta=document.createElement('div');meta.className='project-meta';const cat=document.createElement('span');cat.textContent=categoryLabel(project.category);const order=document.createElement('span');order.textContent=String(index+1).padStart(2,'0')+' / '+String(visible.length).padStart(2,'0');meta.append(cat,order);
 const title=document.createElement('h3');title.textContent=project.title;
 const desc=document.createElement('p');desc.textContent=project.description||'';
 const actions=document.createElement('div');actions.className='project-actions';
 const view=document.createElement('button');view.type='button';view.className='small-btn main';view.textContent='◉ Xem trước';view.addEventListener('click',()=>openPreview(project));actions.append(view);
 const download=safeUrl(project.download);if(download){const a=document.createElement('a');a.className='small-btn';a.textContent=/\.pptx?(?:[?#]|$)/i.test(download)?'↓ Tải PPTX':'↓ Tải file';a.href=download;a.setAttribute('download','');a.target='_blank';a.rel='noopener noreferrer';actions.append(a)}
 body.append(meta,title,desc,actions);
 const link=safeUrl(project.link);if(link){const a=document.createElement('a');a.className='project-link';a.href=link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='↗ Mở đường link dự án';body.append(a)}
 article.append(preview,body);grid.append(article);
 });
 document.getElementById('emptyNote').style.display=visible.length?'none':'block';
}
/* 7. HỘP XEM TRƯỚC (PDF hoặc ảnh):
   - Nếu dự án có previewPdf: tạo iframe để trình duyệt đọc TOÀN BỘ PDF.
   - PDF có thể có nhiều trang: cuộn/chọn trang ngay trong trình xem.
   - Nút "Tải PPTX" nằm trên thẻ, độc lập với file PDF xem trước.
   - Nếu không có previewPdf: hiển thị ảnh đại diện như phiên bản cũ.
   - Không thể phát trực tiếp .pptx bằng HTML thuần; phải xuất thêm PDF.
   - Trình xem PDF tích hợp phụ thuộc trình duyệt; luôn có link mở PDF
     trong tab mới nếu trình duyệt chặn hoặc không hỗ trợ iframe PDF. */
function openPreview(project){
 document.getElementById('modalTitle').textContent=project.title;
 modalContent.replaceChildren();
 const pdf=safeUrl(project.previewPdf);
 if(pdf){
   const hint=document.createElement('p');
   hint.className='pdf-hint';
   hint.textContent='Xem toàn bộ slide dưới dạng PDF. Dùng thanh công cụ trong khung để chuyển trang, phóng to hoặc cuộn.';
   const frame=document.createElement('iframe');
   frame.className='pdf-frame';
   frame.src=pdf;
   frame.title='Xem trước PDF nhiều trang: '+project.title;
   frame.setAttribute('loading','lazy');
   const tools=document.createElement('div');tools.className='pdf-tools';
   const open=document.createElement('a');open.className='small-btn main';
   open.href=pdf;open.target='_blank';open.rel='noopener noreferrer';
   open.textContent='↗ Mở PDF ở tab mới';tools.append(open);
   const download=safeUrl(project.download);
   if(download){const a=document.createElement('a');a.className='small-btn';a.href=download;
     a.setAttribute('download','');a.textContent=/\.pptx?(?:[?#]|$)/i.test(download)?'↓ Tải PowerPoint':'↓ Tải file gốc';tools.append(a)}
   modalContent.append(hint,frame,tools);
 }else{
   const media=previewMarkup(project);
   if(media.tagName==='IMG'){media.style.cssText='display:block;max-width:100%;max-height:65vh;object-fit:contain;margin:auto;border-radius:12px'}
   else{media.style.cssText='width:min(100%,520px);height:300px;margin:auto'}
   modalContent.append(media);
 }
 modal.classList.add('open');
 document.body.classList.add('modal-visible');
 document.getElementById('cancelModal').focus();
}
/* 8. Đóng modal bằng nút, nhấp nền hoặc phím Escape. */
function closeModal(){modal.classList.remove('open');document.body.classList.remove('modal-visible');modalContent.replaceChildren()}
document.getElementById('cancelModal').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('emailLink').addEventListener('click',e=>{if(e.currentTarget.href.endsWith('your.email@example.com')){e.preventDefault();toast('Hãy thay email mẫu trong index.html bằng email của bạn.')}});
/* 9. KHỞI TẠO: vẽ bộ lọc và toàn bộ thẻ khi mở trang. */
renderFilters();renderProjects();