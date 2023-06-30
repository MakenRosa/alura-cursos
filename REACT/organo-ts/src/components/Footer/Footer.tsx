import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social'>
                <ul>
                    <li><a href='https://www.facebook.com/organo.br' target='_blank' rel='noreferrer'><img src='/images/fb.png' alt='Facebook' /></a></li>
                    <li><a href='https://www.twitter.com/organo.br' target='_blank' rel='noreferrer'><img src='/images/tw.png' alt='Twitter' /></a></li>
                    <li><a href='https://www.instagram.com/organo.br' target='_blank' rel='noreferrer'><img src='/images/ig.png' alt='Instagram' /></a></li>
                </ul>
            </div>
            <div className='logo'>
                <img src='/images/logo.png' alt='Organo logo' />
            </div>
            <div className='developer'>
                <p>Developed by Alura</p>
            </div>
        </footer>
    )
}