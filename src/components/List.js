function List() {
  return (
    <div className="list">
      <ul className="list-ul">
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">Histori versi untuk setiap project</p>
            <p className="list-status progress">IN PROGRESS</p>
            <p className="list-description">
              Ide yang bagus untuk menambahkan histori setiap versi untuk
              project
            </p>
          </div>
        </li>
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">
              Berbagi project dengan beberapa pengguna lainnya
            </p>
            <p className="list-status icebox">ICEBOX</p>
            <p className="list-description">
              Dapat membagikan link kepada pengguna lain sehingga aplikasi bisa
              menjadi viral.
            </p>
          </div>
        </li>
        <li className="list-li">
          <div className="list-li-container">
            <p className="list-title">
              Urutkan pengguna berdasarkan aktivitas terakhir
            </p>
            <p className="list-status done">DONE</p>
            <p className="list-description">
              Aplikasi dapat mengurutkan (sort) pengguna berdasarkan aktivitas
              terakhirnya.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
