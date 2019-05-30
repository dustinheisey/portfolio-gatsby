import {
  React,
  styled,
  Form,
  Input,
  Btn,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.div`
  width: 100%;

  & * {
    width: 100%;
  }
`
export default () => (
  <div style={{ margin: 'auto', padding: 'var(--lg)' }}>
    <div>
      <h1>Interested in Making Something Great?</h1>
      <p>
        If your interested in learning more about how I can
        help, text or call me at&nbsp;
        <Link page link='tel:+4697189783'>
          (469) 718 - 9783
        </Link>
        , send me an email at&nbsp;
        <Link page link='mailto:hello@dustinheisey.com'>
          hello@dustinheisey.com
        </Link>
        &nbsp;or fill out the form below and I&apos;ll get
        back to you ASAP.
      </p>
    </div>
    <Form name='Contact'>
      <StyledContainer style={{ width: '100%' }}>
        <Input type='text' name='Name' />
        <Input type='phone' name='Phone' />
        <Input type='area' name='Message' />
      </StyledContainer>
      <Btn primary type='submit' content='Submit' />
    </Form>
  </div>
)
