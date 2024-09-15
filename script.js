// script.js

document.addEventListener('DOMContentLoaded', () => {
    const groupForm = document.getElementById('group-form');
    const groupList = document.getElementById('group-list');
    const searchInput = document.getElementById('search-input');
    
    let groups = [];

    groupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const groupName = document.getElementById('group-name').value;
        const members = document.getElementById('group-members').value.split(',').map(email => email.trim());

        const newGroup = {
            name: groupName,
            members: members
        };

        groups.push(newGroup);
        displayGroups(groups);
        
        groupForm.reset();
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredGroups = groups.filter(group => group.name.toLowerCase().includes(query));
        displayGroups(filteredGroups);
    });

    function displayGroups(groupsToDisplay) {
        groupList.innerHTML = groupsToDisplay.map(group => `<li>${group.name} - Members: ${group.members.join(', ')}</li>`).join('');
    }
});
