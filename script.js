document.addEventListener('DOMContentLoaded', function() {
    const featureListItems = document.querySelectorAll('.feature-list li');
    const contentSections = document.querySelectorAll('.content-section');
    let activeSectionId = null; // Track the currently active section

    featureListItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (activeSectionId === sectionId) {
                // If the same section is clicked again, toggle it off
                section.style.display = 'none';
                activeSectionId = null; // Reset active section
            } else {
                // Close all other sections and open the clicked one
                contentSections.forEach(otherSection => {
                    if (otherSection.id === sectionId) {
                        otherSection.style.display = 'block';
                    } else {
                        otherSection.style.display = 'none';
                    }
                });
                activeSectionId = sectionId; // Update active section
            }
        });
    });
});