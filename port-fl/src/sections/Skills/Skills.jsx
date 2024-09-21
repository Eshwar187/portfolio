import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
function Skills(){
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Vite" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
    </section>
  );
}

export default Skills;
