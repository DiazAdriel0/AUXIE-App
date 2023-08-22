import { useState } from 'react'
import * as Components from './Components'

function LoginRegister() {
    const [signIn, toggle] = useState(true)
    const {
        Container,
        SignUpContainer,
        Input,
        Form,
        Title,
        Button,
        SignInContainer,
        Anchor,
        Paragraph,
        GhostButton,
        OverlayContainer,
        Overlay,
        LeftOverlayPanel,
        RightOverlayPanel,
    } = Components
    return (
        <Container>
            <SignUpContainer signingIn={signIn}>
                <Form>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' />
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Button>Sign Up</Button>
                </Form>
            </SignUpContainer>
            <SignInContainer signingIn={signIn}>
                <Form>
                    <Title>Sign in</Title>
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Anchor href='#'>Forgot your password?</Anchor>
                    <Button>Sign In</Button>
                </Form>
            </SignInContainer>
            <OverlayContainer signingIn={signIn}>
                <Overlay signingIn={signIn}>
                    <LeftOverlayPanel signingIn={signIn}>
                        <Title>Welcome Back!</Title>
                        <Paragraph>
                            To keep connected with us please login with your
                            personal info
                        </Paragraph>
                        <GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </GhostButton>
                    </LeftOverlayPanel>
                    <RightOverlayPanel signingIn={signIn}>
                        <Title>Hello, Friend!</Title>
                        <Paragraph>
                            Enter your personal details and start journey with
                            us
                        </Paragraph>
                        <GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </GhostButton>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    )
}

export default LoginRegister
