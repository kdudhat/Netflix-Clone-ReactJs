import React from "react";
import HeaderContainer from "../containers/header";
import JumboTronContainer from "../containers/jumbotron";
import FaqContainer from "../containers/faq";
import FooterContainer from "../containers/footer";
import { OptForm, Features } from "../components";
function Home() {
  return (
    <>
      <HeaderContainer>
        <Features>
          <Features.Title>
            Unlimited films, TV programmes and more.
          </Features.Title>
          <Features.SubTitle>
            Watch anywhere. Cancel at any time
          </Features.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
          </OptForm>
        </Features>
      </HeaderContainer>
      <JumboTronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
