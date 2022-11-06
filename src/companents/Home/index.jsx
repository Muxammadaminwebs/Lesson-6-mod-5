import React, { useContext, useState } from "react";
import Card from "../../UI/Card";
import context from "../../context";
import Loader from "../../UI/Loader";



const index = () => {
  const {
    data,
    category,
    secondData,
    searchData,
    lastData,
    totalPage,
    language,
    setLang,
    lang,
    pageN
  } = useContext(context);
  const [search, setSearch] = useState("");

  const t = language[lang]
 
  const pageNamber = [];
  for (let i = 1; i <= Math.ceil(secondData.length / totalPage); i++) {
    pageNamber.push(i);
  }


  return (
    <>
      <section>
        <div className="container">
          <div className="row p-4 mt-4">
            <div className="col-lg-6 col-sm-12 pt-2">
              <input
                type="text"
                className="form-control p-3 w-75 "
                placeholder={t.search}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (search.trim().length > 0) {
                    searchData(search);
                  }
                }}
              />
            </div>
            <div className="col-lg-6 col-sm-12 mt-2">
              <select className="form-select p-3 w-50 float-end">
                <option disabled selected>
                  {t.region}
                </option>
                {category.map((e, index) => {
                  return (
                    <option
                      value={e}
                      key={index}
                      onChange={(ev) => {
                        getRegion(ev.target.value);
                      }}
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-lg-12 card-w">
              {lastData.length > 0 ? (
                lastData.map((e, i) => {
                  return <Card key={e.name} data={e} />;
                })
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <nav aria-label="...">
            <ul class="pagination pagination-sm">
              {
                pageNamber.map((e) => {
                  return (
                    <li class="page-item active m-2" aria-current="page" onClick={()=>pageN(e)}>
                      <a class="page-link">
                        {e}<span class="visually-hidden">(current)</span>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default index;
