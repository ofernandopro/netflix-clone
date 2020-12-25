import React from 'react';
import './styles.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default () => {
  return (
    <footer>
      <div className="social-media">
        <FacebookIcon style={{ fontSize: 35, marginRight: 10, cursor: 'pointer' }} />
        <InstagramIcon style={{ fontSize: 35, marginRight: 10, cursor: 'pointer' }} />
        <TwitterIcon style={{ fontSize: 35, marginRight: 10, cursor: 'pointer' }} />
        <YouTubeIcon style={{ fontSize: 35, marginRight: 10, cursor: 'pointer' }} />
      </div>

      <div className="footer-links">
        <div className="column-footer-links">
          <ul>
            <li><a href="">Idioma e Legendas</a></li>
            <li><a href="">Imprensa</a></li>
            <li><a href="">Provacidade</a></li>
            <li><a href="">Entre em contato</a></li>
          </ul>
        </div>
        <div className="column-footer-links">
          <ul>
            <li><a href="">Audiodescrição</a></li>
            <li><a href="">Relações com investidores</a></li>
            <li><a href="">Avisos Legais</a></li>
          </ul>
        </div>
        <div className="column-footer-links">
          <ul>
            <li><a href="">Centro de Ajudas</a></li>
            <li><a href="">Carreiras</a></li>
            <li><a href="">Preferência de cookies</a></li>
          </ul>
        </div>
        <div className="column-footer-links">
          <ul>
            <li><a href="">Cartão pré-pago</a></li>
            <li><a href="">Termos de uso</a></li>
            <li><a href="">Informações corporativas</a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <div className="footer-description">
        <p>Feito com <span role="img" aria-label="coração">❤</span> por Fernando Moreira</p>
        <p>Direitos de imagem para Netflix</p>
        <p>Dados retirados do site themoviedb.org</p>
      </div>
    </footer>
  );
}