
export default class CssTools {

    static applyCSS(element,id,outerclass,classlisthint) {
        // Return if no CSS to apply
        if (classlisthint==null || (outerclass==null && id==null)) {
            return 
        }

        let outerClassNames = outerclass.split(" ").map(x => "."+x)
        let outerCssSelectors = [...outerClassNames,"#"+id]

        let styleSheets = document.styleSheets
        let l = styleSheets.length
        for (let i=0; i<l; i++) {
            let sheet = styleSheets[i]
            let name = sheet.href.split("/").at(-1).split(".")[0]
            if (name===classlisthint) {
                for (let outerCss of outerCssSelectors) {
                    for (let rule of sheet.cssRules) {
                        if (rule.selectorText==outerCss) {
                            let styleRule = rule.style
                            let vals = Object.values(styleRule)
                            for (let val of vals) {
                                element.style[val] = styleRule[val]
                            }
                        }
                    }
                }
                break
            }
        }
    }

}