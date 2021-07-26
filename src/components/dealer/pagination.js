function Pagination1(props) {
  const { current, pages, goToPage } = props;

  let active = current;

  let items = [];

  if (active === 1) {
    items.push(
      <li key="first1" className="disabled">
        <span>First</span>
      </li>
    );
  } else {
    items.push(
      <li onClick={goToPage} data-page={1} key="first">
        <span data-page={1} className="page1">
          First
        </span>
      </li>
    );
  }
  var i = Number(active) > 5 ? Number(active) - 4 : 1;
  if (i !== 1) {
    items.push(
      <li key="dots1" className="disabled dots">
        <span>...</span>
      </li>
    );
  }
  for (; i <= Number(active) + 4 && i <= pages; i++) {
    if (i === Number(active)) {
      items.push(
        <li className="active" key={i}>
          <span>{i}</span>
        </li>
      );
    } else {
      items.push(
        <li onClick={goToPage} data-page={i} key={i}>
          <span data-page={i} className={`page${i}`}>
            {i}
          </span>
        </li>
      );
    }
    if (i === Number(active) + 4 && i < Number(pages)) {
      items.push(
        <li key="dots2" className="disabled dots">
          <span>...</span>
        </li>
      );
    }
  }
  if (active === Number(pages)) {
    items.push(
      <li key = 'disabled' className="disabled">
        <span>Last</span>
      </li>
    );
  } else {
    items.push(
      <li onClick={goToPage} data-page={pages} key="last">
        <span data-page={pages} className={`page${pages}`}>
          Last
        </span>
      </li>
    );
  }

  return (
    <>
      <ul className="pagination text-center">{items}</ul>
    </>
  );
}

export default Pagination1;
