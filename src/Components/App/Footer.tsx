import styled from "styled-components";

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
    <FooterContainer>
      <FooterWrapp>
        {Data.footer.map((footerOutput: footerOutput, i: number) => {
          return (
            <FooterLinkWrapp
              target="_blank"
              href={footerOutput.url}
              rel="noreferrer"
              key={i}
            >
              <FooterIcon src={footerOutput.icon} alt={footerOutput.alt} />
              <FooterTxt>{footerOutput.title}</FooterTxt>
            </FooterLinkWrapp>
          );
        })}
        <CopyRight>&copy; 2022 Horaana</CopyRight>
      </FooterWrapp>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const FooterWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const FooterLinkWrapp = styled.a`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  color: #3391ff;
`;

const FooterIcon = styled.img`
  height: 42px;
  margin-right: 1rem;
`;

const FooterTxt = styled.p`
  margin: 0;
`;

const CopyRight = styled.p`
  color: #e8e6e3;
  font-size: 1rem;
`;

export default Footer;
