import styles from './teamBuilder.module.scss';
import layout from '../../styles/layout.module.scss';

import {useEffect, useState} from 'react';

import {heros} from '../../data/heros.js';

import { ReactComponent as  Add} from '../../assets/images/add-outline.svg';
import { ReactComponent as  Copy} from '../../assets/images/copy-outline.svg';


export default function TeamBuilder () {
  const [herosData, setHerosData] = useState(heros);
  const [selectedHero, setSelectedHero] = useState();
  const [hero, setHero] = useState({});
  const [composition, SetComposition] = useState([]);

  useEffect(() => {
    function addHero () {
      if (!selectedHero) {
        return null;
      }

      return setHero(herosData.filter((ele) => {
        return ele.name === selectedHero;
      }));
    };

    addHero();
  }, [herosData, selectedHero]);


  const handleCompostion = function (hero) {
    const checkHero = composition.filter((compHero) => {
      return compHero.name === hero.name
    });

    if (checkHero.length > 0) {
      const removedHero = composition.filter(function(ele){
        return ele.name !== hero.name;
      });

      return SetComposition(removedHero);
    }

    if (composition.length === 10) {
      return console.log('Max limit!');
    }


    return SetComposition([...composition, hero]);
  };

  const handleClipBoard = () => {
    navigator.clipboard.writeText('0xDA55Ff5Da5a3d57Ccc69173059A2A9b20E425Fb3')
  }

  return (
    <div className={`${layout['flex']} ${layout['wrap']} ${layout['justify-center']}`}>
      <div className={`${styles['composition-container']} ${layout['mr-3']} ${layout['mb-xs-3']}`}>
        <div className={`${layout['mb-1']}`}>
          <h2>Composition</h2>
        </div>
        <div className={`${styles['composition-card']} ${layout['flex']} ${layout['column']} ${layout['align-center']} ${layout['col-12']}`}>
          {composition.map((hero) => {
            return (
              <div key={hero.name} className={`${styles['composition-item']} ${layout['flex']} ${layout['align-center']} ${layout['col-11']} ${layout['mb-2']}`}>
                <div className={`${styles['avatar']} ${layout['flex']} ${layout['align-center']} ${layout['justify-center']} ${layout['mr-3']}`} onClick={() => setSelectedHero(hero.name)}>
                  <button className={`${styles['icon-button']} ${layout['pointer']} ${layout['col-12']}`}>
                    <img className={`${layout['image-responsive']} ${layout['image-round']}`} src={hero.avatar} alt=""/>
                  </button>
                </div>
                <div>
                  <span className={`${styles['hero-name']}`}>{hero.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles['heros-container']} ${layout['mr-3']} ${layout['ml-md-3']}`}>
        <div className={`${layout['mb-1']} ${layout['col-12']}`}>
          <h2>Heros</h2>
        </div>
        <div className={`${styles['heros-card']} ${layout['pt-2']} ${layout['pl-2']}`}>
          <div className={`${layout['flex']} ${layout['wrap']} ${layout['justify-xs-center']}`}>
            {herosData.map((hero) => {
              return (
                <div key={hero.name} className={`${layout['pr-2']} ${layout['pb-2']}`}>
                  <div className={`${styles['heros-item']} ${layout['flex']} ${layout['align-center']}`}>
                    <div className={`${styles['avatar']} ${layout['flex']} ${layout['align-center']} ${layout['justify-center']} ${layout['mr-3']}`}>
                      <button className={`${styles['icon-button']} ${layout['pointer']} ${layout['col-12']}`} onClick={() => setSelectedHero(hero.name)}>
                        <img className={`${layout['image-responsive']} ${layout['image-round']}`} src={hero.avatar} alt=""/>
                      </button>
                    </div>
                    <div>
                      <span className={`${styles['hero-name']}`}>{hero.name}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>


      <div className={`${layout['mb-3']}`}>
        <div className={`${styles['hero-info-header']}`}>
        </div>
          {hero[0] ? (
            hero.map((hero) => {
              return (
                <div key={`hero-infos-${hero.name}`} className={`${styles['hero-info-card']} ${layout['flex']} ${layout['column']} ${layout['justify-between']} ${layout['mb-3']}`}>
                <div  className={`${styles['hero-infos']}`}>
                  <div className={`${layout['flex']} ${layout['justify-center']} ${layout['align-start']} ${layout['mb-1']}`}>
                    <div className={`${layout['flex']} ${layout['align-center']}`}>
                      <div className={`${styles['hero-info-avatar']} ${layout['image-round']} ${layout['mr-2']}`}>
                        <img className={`${layout['image-responsive']} ${layout['image-round']}`} src={hero.avatar} alt="" />
                      </div>
                      <span className={`${styles['hero-info-name']}`}>{hero.name}</span>
                    </div>
                  </div>
                  <div className={`${layout['flex']} ${layout['justify-center']} ${layout['mb-1']}`}>
                    <div className={`${layout['flex']} ${layout['column']} ${layout['mr-2']}`}>
                      <span className={`${styles['hero-info-headers']}`}>TIER</span>
                      <span className={`${styles['hero-info-text']} ${layout['text-center']}`}>{hero.tier}</span>
                    </div>
                    <div className={`${layout['flex']} ${layout['column']} ${layout['mr-2']}`}>
                      <span className={`${styles['hero-info-headers']}`}>FACTION</span>
                      <span className={`${styles['hero-info-text']} ${layout['text-center']}`}>{hero.faction}</span>
                    </div>
                    <div className={`${layout['flex']} ${layout['column']}`}>
                      <span className={`${styles['hero-info-headers']}`}>CLASS</span>
                      <span className={`${styles['hero-info-text']} ${layout['text-center']}`}>{hero.class}</span>
                    </div>
                  </div>
                  <div className={`${layout['flex']} ${layout['column']} ${layout['mb-1']}`}>
                    <h2 className={`${styles['hero-info-headers']}`}>FATES</h2>
                    {hero.fates.map((ele) => {
                      return (
                        <span key={ele.name} className={`${styles['hero-info-text']} ${layout['mb-1']}`}>{ele.name}: <span className={`${styles['emphasis']}`}>{ele.item}</span>, {ele.description}.</span>
                      );
                    })}
                  </div>
                  <div className={`${layout['flex']} ${layout['column']}`}>
                    <h2 className={`${styles['hero-info-headers']}`}>SKILLS</h2>
                    {hero.skills.map((ele) => {
                      return (
                        <span key={ele.name} className={`${styles['hero-info-text']} ${layout['mb-1']}`}>{ele.name}: {ele.description}.</span>
                      );
                    })}
                  </div>
                </div>
                <div className={`${layout['flex']} ${layout['justify-center']} ${layout['mt-1']}`}>
                  {composition.filter((compHero) => {return compHero.name === hero.name}).length > 0 ? (
                    <button className={`${styles['hero-info-button']} ${layout['pointer']}`} onClick={() => handleCompostion({name: hero.name, avatar: hero.avatar})}>Remove</button>
                  ) : (
                    <button className={`${styles['hero-info-button']} ${layout['pointer']}`} onClick={() => handleCompostion({name: hero.name, avatar: hero.avatar})}>Add</button>
                  )
                  }

                </div>
                </div>
              );
            })
          ) : (
            <div key={`hero-infos-${hero.name}`} className={`${styles['hero-info-card']} ${layout['flex']} ${layout['align-center']} ${layout['justify-center']} ${layout['mb-3']}`}>
              <span>Select One Hero</span>
            </div>
          )}
        <div className={`${styles['donation-card']}`}>
          <p className={`${layout['mb-1']}`}>Did this help you somehow?</p>
          <p className={`${layout['mb-1']}`}>Pay me a coffee and help to maintain the app online and to improve the app and add more functionalities!</p>
          <p>Send your donation to</p>
          <button className={`${styles['wallet-button']} ${layout['flex']} ${layout['mb-1']}`} onClick={handleClipBoard}>
            <span className={`${styles['wallet']}`}>0xDA55Ff5Da5a3d57Ccc69173059A2A9b20E425Fb3</span>
            <Copy className={`${styles['copy-icon']}`} />
          </button>
          <p>Thanks for the coffee, I hope it continues to be useful to you.</p>
        </div>
      </div>
    </div>
  );
}
