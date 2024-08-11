document.addEventListener('DOMContentLoaded', () => {
    const rules = document.querySelectorAll('.rule-title');

    rules.forEach(rule => {
        rule.addEventListener('click', () => {
            const content = rule.nextElementSibling;
            const triangle = rule.querySelector('.triangle');
            
            // Přepínání tříd pro zobrazení a animaci
            content.classList.toggle('visible');
            rule.classList.toggle('active');

            // Aktualizace URL s ID pravidla pro snadné sdílení
            const ruleId = rule.getAttribute('id');
            if (content.classList.contains('visible')) {
                history.replaceState(null, null, `#${ruleId}`);
            } else {
                history.replaceState(null, null, ` `);
            }
        });
    });

    // Automatické rozbalení sekce, pokud je ID v URL
    const hash = window.location.hash;
    if (hash) {
        const targetRule = document.querySelector(hash);
        if (targetRule) {
            const content = targetRule.nextElementSibling;
            const triangle = targetRule.querySelector('.triangle');
            content.classList.add('visible');
            targetRule.classList.add('active');
        }
    }
});
