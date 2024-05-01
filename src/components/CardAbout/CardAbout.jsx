import styles from './CardAbout.module.css';

export const CardAbout = ({ title, data }) => {

    return (
        <div className={styles.card}>
            <h3 className={styles.titleCard}>{title}</h3>
            <ul className={styles.list}>
                {
                    data.map((skill, id) => {
                        return (
                            <li key={id} className={styles.item}>
                                {skill}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
