import styles from './navbar.module.scss';
import layout from '../../styles/layout.module.scss';

import logo from '../../assets/images/logo.png';

export default function Navbar () {
  return (
    <div className={`${styles['navbar']}`}>
      <div className={`${layout['flex']} ${layout['align-center']} ${layout['justify-center']}`}>
        <div className={`${styles['logo']} ${layout['mr-1']}`}>
          <img className={`${layout['image-responsive']}`} src={logo} alt="logo" />
        </div>
        <span className={`${styles['logo-text']}`}>mymasterwartools</span>
      </div>
    </div>
  );
}
