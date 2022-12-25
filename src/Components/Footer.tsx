const Footer = (props: any) => {
  // 型定義
  interface footerOutput {
    title: string;
    url: string;
    icon: string;
    alt: string;
  }
  const Data = props.Data;
  return (
    <footer className="Footer">
      <div className="Footer-wrap">
        {Data.footer.map((footerOutput: footerOutput, i: number) => {
          return (
            <a target="_blank" href={footerOutput.url} rel="noreferrer" key={i}>
              <img src={footerOutput.icon} alt={footerOutput.alt} />
              <p>{footerOutput.title}</p>
            </a>
          );
        })}
        <p className="right">&copy; 2022 Horaana</p>
      </div>
    </footer>
  );
};

export default Footer;
