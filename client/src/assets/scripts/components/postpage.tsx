import logo from '../../images/logo2.png';
import bookicon from '../../images/bookicon.png'
import like from '../../images/icons8-like-50.png'
import comment from '../../images/icons8-comment-48.png'
import bookmark from '../../images/icons8-bookmark-48 (2).png'
import share from '../../images/icons8-share-24.png'

type PostProps = {
  postId: number;
};

function PostPage(props: PostProps) {

  return (
    <div className="post-page">
      <div className="header">
        <img className='back' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nO3ZQQqDQBBE0X/CaMQwi+TuggEN5AgGDMKsgq67y9QD99XVLmYUzORdgRl4Az1iCrAAa322IWTDr8AL4fAL0CHgthP+A9wR4PBR3HwUNx/FzUdx81HcfBQ3H6U9OM9v53wJT+XwpxigVX+FqJ9A9q6GD4T0HiIJbyILbyILbyILbyILbyILbyL7L6YG8SFGxJSfISYENcBQ279Eh7G/8wUG4eG0hTVm9AAAAABJRU5ErkJggg==" />
        <div className="logo">
          <img src={logo} className="logo2"></img>
          <p>Mohammad Hosein Parvini</p>
        </div>
      </div>
      <div className="body">
        <h1 className='title'>JS Front-End Libraries and Their Meta-Frameworks
        </h1>
        <div className='stats'>
          <img src={logo} className="logo2"></img>
          <p className='name'>Mohammad Hosein Parvini</p>
          <p className='dot'>.</p>
          <p className='date'>Nov 5, 2023</p>
          <p className='dot'>.</p>
          <div className='readtime'>
            <img src={bookicon} />
            <p >1 min read</p>
          </div>
        </div>
        <div className='content'>
          AES Algorithms
          There are different modes of operation for AES-256, which is a symmetric-key encryption algorithm that uses a 256-bit key. The choice of mode depends on the security and performance requirements of the application. Some of the common modes are:

          CBC (Cipher Block Chaining): This mode encrypts each block of plaintext by XORing it with the previous ciphertext block. It requires an initialization vector (IV) to start the process. It provides confidentiality but not integrity or authentication¹.
          CTR (Counter): This mode converts AES-256 into a stream cipher by generating a keystream from a nonce and a counter. It XORs the keystream with the plaintext to produce the ciphertext. It allows parallel encryption and decryption, and random access to the ciphertext. It also provides confidentiality but not integrity or authentication¹.
          GCM (Galois/Counter Mode): This mode is an authenticated encryption mode that combines CTR mode with a message authentication code (MAC) based on Galois field arithmetic. It provides confidentiality, integrity and authentication, and is widely used in secure communication protocols¹².
          XTS (XEX-based Tweaked-codebook mode with Ciphertext Stealing): This mode is designed for disk encryption and encrypts each sector of data with a different key derived from the original key and the sector number. It provides confidentiality and preserves the length of the plaintext. It also allows random access to the ciphertext¹³.
          OCB (Offset Codebook): This mode is another authenticated encryption mode that combines a tweakable block cipher with a MAC. It provides confidentiality, integrity and authentication, and has high efficiency and low overhead. However, it is patented and may require a license to use¹⁴.
        </div>
        
      </div>
      <div className='interaction'>
        <div className='interaction-content'>
          <img src={like}></img>
          <img src={comment}></img>
          <img src={bookmark}></img>
          <img src={share} />
        </div>
      </div>
      <div className='written-by'>
          <p className='title'>Written by</p>

          <div className='logo3'>
            <img src={logo}></img>
            <div className='name-about'>
              <p className='name'>Mohammad Hosein Parvini</p>
              <p className='about'>Student at K. N. Toosi University of Technology</p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default PostPage;
