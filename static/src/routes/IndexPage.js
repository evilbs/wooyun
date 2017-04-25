import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Tabs, { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/TabContent';

const CountApp = ({ companys, dispatch }) => {
  return (<div className={styles.container}>
    <nav className={styles.nav}>
      <Tabs
        defaultActiveKey="2"
        renderTabBar={() => <ScrollableInkTabBar />}
        renderTabContent={() => <TabContent />}
      >
        <TabPane tab="companys" key="1">
        hello   osdfasdfasdfasdf
          {
            companys.list.map((company, index) => <div key={index}>{company.name}</div>)
          }
        </TabPane>
        <TabPane tab="tag" key="2">second</TabPane>
        <TabPane tab="name" key="3">third</TabPane>
      </Tabs>
    </nav>
    <div className={styles.bugs}>
      <header className={styles.header}>
        <input type="text" />
        <button>search</button>
      </header>
      <section className={styles.content}>
        content
        </section>
    </div>
  </div>
  );
};

function mapStateToProps(state) {
  return { companys: state.companys };
}

export default connect(mapStateToProps)(CountApp);
