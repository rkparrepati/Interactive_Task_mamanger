const activeTasks = [
    // Personal Tasks
    {
        id: 1,
        label: 'Do laundry and fold clothes',
        category: 'Personal',
        subCategory: 'Daily chores',
        priority: 'Medium',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 2,
        label: 'Create a shopping list for the week',
        category: 'Personal',
        subCategory: 'Shopping lists',
        priority: 'Low',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 3,
        label: 'Pick up dry cleaning',
        category: 'Personal',
        subCategory: 'Personal errands',
        priority: 'High',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 4,
        label: 'Practice meditation for 15 minutes',
        category: 'Personal',
        subCategory: 'Self-care routines',
        priority: 'Low',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 5,
        label: 'Schedule dentist appointment',
        category: 'Personal',
        subCategory: 'Appointment scheduling',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },

    // Work Tasks
    {
        id: 6,
        label: 'Create project timeline and milestones',
        category: 'Work',
        subCategory: 'Project management',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 7,
        label: 'Attend weekly team meeting',
        category: 'Work',
        subCategory: 'Meetings and appointments',
        priority: 'Medium',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 8,
        label: 'Reply to client emails',
        category: 'Work',
        subCategory: 'Email correspondence',
        priority: 'High',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 9,
        label: 'Conduct market research for new product',
        category: 'Work',
        subCategory: 'Research and development',
        priority: 'Medium',
        status: 'Waiting',
        statusCss: 'waiting',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 10,
        label: 'Prepare monthly sales report',
        category: 'Work',
        subCategory: 'Reporting and documentation',
        priority: 'High',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },

    // Educational Tasks
    {
        id: 11,
        label: 'Complete math homework assignment',
        category: 'Educational',
        subCategory: 'Homework assignments',
        priority: 'Medium',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 12,
        label: 'Review notes for upcoming exam',
        category: 'Educational',
        subCategory: 'Exam preparation',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 13,
        label: 'Research for history research paper',
        category: 'Educational',
        subCategory: 'Research papers',
        priority: 'Low',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 14,
        label: 'Collaborate with classmates on group project',
        category: 'Educational',
        subCategory: 'Group projects',
        priority: 'Medium',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 15,
        label: 'Enroll in an online coding course',
        category: 'Educational',
        subCategory: 'Online courses',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },

    // Health and Fitness Tasks
    {
        id: 16,
        label: 'Complete full-body workout routine',
        category: 'Health and Fitness',
        subCategory: 'Exercise routines',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 17,
        label: 'Plan healthy meals for the week',
        category: 'Health and Fitness',
        subCategory: 'Meal planning',
        priority: 'Medium',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 18,
        label: 'Schedule annual physical exam',
        category: 'Health and Fitness',
        subCategory: 'Doctor appointments',
        priority: 'High',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 19,
        label: 'Organize medication schedule',
        category: 'Health and Fitness',
        subCategory: 'Medication management',
        priority: 'Low',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 20,
        label: 'Track daily water intake',
        category: 'Health and Fitness',
        subCategory: 'Health tracking',
        priority: 'Low',
        status: 'Waiting',
        statusCss: 'waiting',
        checked: false,
        dueDate: 'Upcoming'
    },

    // Financial Tasks
    {
        id: 21,
        label: 'Create monthly budget spreadsheet',
        category: 'Financial',
        subCategory: 'Budgeting',
        priority: 'Medium',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 22,
        label: 'Pay utility bills',
        category: 'Financial',
        subCategory: 'Bill payments',
        priority: 'High',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 23,
        label: 'Review investment portfolio',
        category: 'Financial',
        subCategory: 'Investment management',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 24,
        label: 'Gather tax documents for filing',
        category: 'Financial',
        subCategory: 'Tax filing',
        priority: 'Medium',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 25,
        label: 'Track daily expenses in finance app',
        category: 'Financial',
        subCategory: 'Expense tracking',
        priority: 'Low',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },

    // Social Tasks
    {
        id: 26,
        label: 'Plan company team-building event',
        category: 'Social',
        subCategory: 'Event planning',
        priority: 'High',
        status: 'Waiting',
        statusCss: 'waiting',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 27,
        label: 'Attend friend\'s birthday party',
        category: 'Social',
        subCategory: 'Social gatherings',
        priority: 'Low',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 28,
        label: 'Attend industry networking event',
        category: 'Social',
        subCategory: 'Networking',
        priority: 'Medium',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 29,
        label: 'Call parents to catch up',
        category: 'Social',
        subCategory: 'Keeping in touch with friends and family',
        priority: 'Low',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 30,
        label: 'Volunteer at local food bank',
        category: 'Social',
        subCategory: 'Volunteer work',
        priority: 'High',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },

    // Travel Tasks
    {
        id: 31,
        label: 'Book flights for vacation',
        category: 'Travel',
        subCategory: 'Booking flights and accommodations',
        priority: 'High',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 32,
        label: 'Create itinerary for trip',
        category: 'Travel',
        subCategory: 'Itinerary planning',
        priority: 'Medium',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 33,
        label: 'Make packing list for vacation',
        category: 'Travel',
        subCategory: 'Packing lists',
        priority: 'Low',
        status: 'Waiting',
        statusCss: 'waiting',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 34,
        label: 'Research tourist attractions at destination',
        category: 'Travel',
        subCategory: 'Researching destinations',
        priority: 'Medium',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 35,
        label: 'Arrange transportation to airport',
        category: 'Travel',
        subCategory: 'Transportation arrangements',
        priority: 'High',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },

    // Household Tasks
    {
        id: 36,
        label: 'Clean kitchen and wash dishes',
        category: 'Household',
        subCategory: 'Cleaning schedules',
        priority: 'Medium',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 37,
        label: 'Fix leaking faucet in bathroom',
        category: 'Household',
        subCategory: 'Maintenance and repairs',
        priority: 'High',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 38,
        label: 'Go grocery shopping',
        category: 'Household',
        subCategory: 'Grocery shopping',
        priority: 'Low',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 39,
        label: 'Paint bedroom walls',
        category: 'Household',
        subCategory: 'Home improvement projects',
        priority: 'High',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 40,
        label: 'Feed and groom the pet',
        category: 'Household',
        subCategory: 'Pet care',
        priority: 'Low',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Today'
    },

    // Career Development Tasks
    {
        id: 41,
        label: 'Take online course to learn new programming language',
        category: 'Career Development',
        subCategory: 'Skill development',
        priority: 'High',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 42,
        label: 'Attend industry conference on professional development',
        category: 'Career Development',
        subCategory: 'Networking events',
        priority: 'Medium',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 43,
        label: 'Update resume and LinkedIn profile',
        category: 'Career Development',
        subCategory: 'Job searching',
        priority: 'High',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 44,
        label: 'Apply for three job positions',
        category: 'Career Development',
        subCategory: 'Resume/CV updating',
        priority: 'High',
        status: 'Waiting',
        statusCss: 'waiting',
        checked: false,
        dueDate: 'Upcoming'
    },
    {
        id: 45,
        label: 'Study for professional certification exam',
        category: 'Career Development',
        subCategory: 'Professional certification',
        priority: 'Medium',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },

    // Goal-oriented Tasks
    {
        id: 46,
        label: 'Create 5-year career plan',
        category: 'Goal-oriented',
        subCategory: 'Long-term planning',
        priority: 'High',
        status: 'In Review',
        statusCss: 'review',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 47,
        label: 'Track progress towards fitness goals',
        category: 'Goal-oriented',
        subCategory: 'Milestone tracking',
        priority: 'Medium',
        status: 'Completed',
        statusCss: 'completed',
        checked: false,
        dueDate: 'Overdue'
    },
    {
        id: 48,
        label: 'Set aside time each week for personal growth',
        category: 'Goal-oriented',
        subCategory: 'Goal setting',
        priority: 'Low',
        status: 'Pending',
        statusCss: 'pending',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 49,
        label: 'Create vision board for future aspirations',
        category: 'Goal-oriented',
        subCategory: 'Progress monitoring',
        priority: 'Low',
        status: 'Approved',
        statusCss: 'approved',
        checked: false,
        dueDate: 'Today'
    },
    {
        id: 50,
        label: 'Implement daily reward system for achieving goals',
        category: 'Goal-oriented',
        subCategory: 'Reward systems',
        priority: 'Medium',
        status: 'In Progress',
        statusCss: 'progress',
        checked: false,
        dueDate: 'Today'
    }
];

export default activeTasks;
