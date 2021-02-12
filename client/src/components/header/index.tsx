import './style.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>XMeme</h1>
      <h4><a href= "https://xmeme-crio.herokuapp.com/swagger-ui/">API</a></h4>
    </header>
  );
}
 
export default Header;