export default function PageHeader() {
  return (
    <div className="page-header">
      <div className="page-header__language">
        <button className="page-header__language--button">.</button>
      </div>
      <h2>Guess The Flag</h2>
      <div className="stats"></div>
    </div>
  );
}
