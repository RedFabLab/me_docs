import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Redfab',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Redfab — российская компания, которая разрабатывает и производит промышленное оборудование для 3D-печати, 
        а также предлагает услуги по контрактному производству изделий из термопластов.
      </>
    ),
  },
  {
    title: 'ПАК Redfab',
    Svg: require('@site/static/img/PAKS.svg').default,
    description: (
      <>
       ПАК Redfab — комплекс для поточной 3D-печати, включающий три принтера и вспомогательные системы: вакуумную, 
       системы подачи и автоматического сброса деталей, систему селективной подачи а также шкафы для электроники и 
       материалов. Работает по технологии FFF (FDM) и поддерживает мультиматериальную печать под управлением 
       MES-системы.
      </>
    ),
  },
  {
    title: 'MES-система',
    Svg: require('@site/static/img/MES.svg').default,
    description: (
      <>
        MES-система от Redfab — инструмент для управления производством на основе FFF. Она объединяет все установки 
        в одном веб-интерфейсе, позволяя удаленно контролировать и управлять процессами. Это серверное 
        веб-приложение с базой данных для удобного управления.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
