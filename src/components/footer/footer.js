import styles from './footer.module.scss';
import layout from '../../styles/layout.module.scss'

export default function Footer () {
  return (
    <footer className={`${styles['footer']} ${layout['flex']} ${layout['justify-center']} ${layout['pt-4']} ${layout['pb-4']}`}>
      <p className={`${styles['footer-text']} ${layout['text-center']} ${layout['pl-2']} ${layout['pr-2']}`}>Mymasterwartools isn't endorsed by Mymasterwar and doesn't reflect the views or opinions of Mymasterwar or anyone officially involved in producing or managing Mymasterwar.</p>
    </footer>
  )
}
