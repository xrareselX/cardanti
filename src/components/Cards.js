import { useTranslation } from "react-i18next";

function Cards(){
    const {t, i18n} = useTranslation();
    const cards = [
        {
            h3: t("business.section2.cards.card1.h3"),
            p: t("business.section2.cards.card1.p")
        },
        {
            h3: t("business.section2.cards.card2.h3"),
            p: t("business.section2.cards.card2.p")
        },
        {
            h3: t("business.section2.cards.card3.h3"),
            p: t("business.section2.cards.card3.p")
        },
        {
            h3: t("business.section2.cards.card4.h3"),
            p: t("business.section2.cards.card4.p")
        },
        {
            h3: t("business.section2.cards.card5.h3"),
            p: t("business.section2.cards.card5.p")
        }
    ]
}
export default Cards;