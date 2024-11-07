export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    
    let flag = false;
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        flag = true;
        if(pic.length == 1) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('columns-img-col');
          }
        } else {
          col.classList.add('columns-content-col');
        }
      } else {
        col.classList.add('columns-content-col');
      }
    });
    if (!flag) {
      row.classList.add('columns-no-img-container');
    } else {
      row.classList.add('column-container');
    }
  });
}
