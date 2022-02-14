import styles from './home.module.scss';
import layout from '../../styles/layout.module.scss';

import TeamBuilder from '../../components/teamBuilder/teamBuilder';

export default function Home ({className}) {
  return (
    <div className={`${className} ${layout['flex']} ${layout['justify-center']}`}>
      <TeamBuilder />
    </div>
  );
}
