const Wrapper = ({ children }) => (
  <div className="wrapper">
    <style jsx>{`
        div {
          max-width: -webkit-calc(800px - (30px * 2));
          max-width: calc(800px - (30px * 2));
          margin-right: auto;
          margin-left: auto;
          padding-right: 30px;
          padding-left: 30px;
        }
        @media screen and (max-width: 800px) {
          div {
            max-width: -webkit-calc(800px - (30px));
            max-width: calc(800px - (30px));
            padding-right: 15px;
            padding-left: 15px;
          }
        }
        div:after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
    {children}
  </div>
);

export default Wrapper;
