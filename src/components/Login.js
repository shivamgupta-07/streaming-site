import styled from "styled-components";
// CTA -> Call to Action page
const Login = (props) => {
    return (
      <Container>
        <Content>
            <BgImage />
          <CTA> 
            <CTALogoOne src="/images/myflix.png" alt="" />
            <Description>
              Get Premium Access to Sports and the Marvel Movies for an additional fee
              with a Disney+ subscription. As of 23/07/21, the price of Disney+
              and The Disney Bundle will increase by ₹12    00.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          
        </Content>
      </Container>
    );
  };
  
  const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  `;
  
  const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
  `;
  
  const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
  `;
  
  const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    margin-top: 10px;
  `;
  
  const CTALogoOne = styled.img`
    max-width: 400px;
    min-height: 1px;
    margin-bottom: 0;
    margin: auto;
  `;
  
  const Description = styled.p`
    position: absolute;
    bottom: 50px;
    color: hsla(0, 0%, 95.3%, 1);
    line-height: 1.5;
    letter-spacing: 1.5px;
  `;
  
  const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 100%;
    margin: auto;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 20px;
  `;

  export default Login  