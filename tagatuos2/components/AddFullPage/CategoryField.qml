import QtQuick 2.4
import Ubuntu.Components 1.3
import "../Common"

ExpandableListItem {
    id: categoryExpandable

    width: parent.width <= units.gu(60) ? parent.width : units.gu(60)
    listViewHeight: units.gu(28)
    listViewInteractive: true
    listBackground: true
    listBackgroundColor: theme.palette.normal.background
    model: listModels.modelCategories
    titleText.textSize: Label.Medium
    titleText.font.weight: Text.Normal
    subText.textSize: Label.Medium
    subText.color: theme.palette.normal.backgroundText
    expansionBottomDivider: false
    divider.visible: false
    headerDivider.visible: false
    highlightColor: theme.palette.highlighted.background
    iconColor: theme.palette.normal.backgroundText
    titleText.text: i18n.tr("Category")
    valueRoleName: "category_name"
    textRoleName: "category_name"
    savedValue: model.get(0).category_name

    onToggle: {
        savedValue = newValue
    }
}
