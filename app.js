// Enhanced Responsive Mental Health Support Website JavaScript

// Application data from JSON
const appData = {
  emergencyContacts: [
    {"name": "National Suicide Prevention Lifeline", "phone": "988", "available": "24/7", "type": "crisis"},
    {"name": "Crisis Text Line", "phone": "Text HOME to 741741", "available": "24/7", "type": "crisis"},
    {"name": "Campus Counseling Center", "phone": "+1-555-0123", "available": "Mon-Fri 9AM-5PM", "type": "counseling"},
    {"name": "Student Health Services", "phone": "+1-555-0124", "available": "24/7", "type": "medical"},
    {"name": "Local Emergency Services", "phone": "911", "available": "24/7", "type": "emergency"}
  ],
  resources: [
    {"title": "Managing Academic Stress", "category": "Academic", "description": "Techniques for handling academic pressure and deadlines", "readTime": "5 min", "difficulty": "Beginner"},
    {"title": "Anxiety Coping Strategies", "category": "Mental Health", "description": "Evidence-based methods to manage anxiety symptoms", "readTime": "8 min", "difficulty": "Intermediate"},
    {"title": "Sleep Hygiene for Students", "category": "Wellness", "description": "Improving sleep quality for better mental health", "readTime": "6 min", "difficulty": "Beginner"},
    {"title": "Building Social Connections", "category": "Social", "description": "Tips for forming meaningful relationships in college", "readTime": "10 min", "difficulty": "Beginner"},
    {"title": "Mindfulness and Meditation", "category": "Wellness", "description": "Introduction to mindfulness practices for stress relief", "readTime": "12 min", "difficulty": "Beginner"},
    {"title": "Depression Awareness", "category": "Mental Health", "description": "Understanding and recognizing signs of depression", "readTime": "15 min", "difficulty": "Intermediate"},
    {"title": "Crisis Management", "category": "Crisis", "description": "What to do during a mental health crisis", "readTime": "7 min", "difficulty": "Advanced"},
    {"title": "Exam Anxiety Solutions", "category": "Academic", "description": "Specific strategies for test-taking stress", "readTime": "9 min", "difficulty": "Intermediate"}
  ],
  assessmentQuestions: {
    phq9: [
      {"question": "Little interest or pleasure in doing things", "scale": "0-3"},
      {"question": "Feeling down, depressed, or hopeless", "scale": "0-3"},
      {"question": "Trouble falling or staying asleep, or sleeping too much", "scale": "0-3"},
      {"question": "Feeling tired or having little energy", "scale": "0-3"},
      {"question": "Poor appetite or overeating", "scale": "0-3"},
      {"question": "Feeling bad about yourself or that you are a failure", "scale": "0-3"},
      {"question": "Trouble concentrating on things", "scale": "0-3"},
      {"question": "Moving or speaking slowly or being fidgety", "scale": "0-3"},
      {"question": "Thoughts that you would be better off dead", "scale": "0-3"}
    ],
    gad7: [
      {"question": "Feeling nervous, anxious, or on edge", "scale": "0-3"},
      {"question": "Not being able to stop or control worrying", "scale": "0-3"},
      {"question": "Worrying too much about different things", "scale": "0-3"},
      {"question": "Trouble relaxing", "scale": "0-3"},
      {"question": "Being so restless that it is hard to sit still", "scale": "0-3"},
      {"question": "Becoming easily annoyed or irritable", "scale": "0-3"},
      {"question": "Feeling afraid as if something awful might happen", "scale": "0-3"}
    ],
    stress: [
      {"question": "How often do you feel overwhelmed by academic workload?", "scale": "0-4"},
      {"question": "How difficult is it to balance studies with personal life?", "scale": "0-4"},
      {"question": "How often do you worry about meeting academic expectations?", "scale": "0-4"},
      {"question": "How stressed do you feel about your future career?", "scale": "0-4"},
      {"question": "How often do you feel pressure from family or peers?", "scale": "0-4"}
    ]
  },
  chatbotResponses: {
    greeting: [
      "Hello! I'm here to support you. How are you feeling today?",
      "Hi there! I'm your mental health support companion. What's on your mind?",
      "Welcome! I'm here to listen and help. How can I support you today?"
    ],
    anxiety: [
      "I understand you're feeling anxious. Let's try some grounding techniques. Can you name 5 things you can see around you right now?",
      "Anxiety can be overwhelming. Let's start with deep breathing - breathe in for 4 counts, hold for 4, exhale for 6. Try this with me.",
      "I hear that you're anxious. Remember, this feeling will pass. Would you like to try a quick mindfulness exercise?"
    ],
    depression: [
      "I hear that you're struggling with feeling down. These feelings are valid and you're not alone. Have you been able to talk to anyone about how you're feeling?",
      "Depression can make everything feel heavy. You've taken a brave step by reaching out. What's been the hardest part for you lately?",
      "Thank you for sharing this with me. Depression affects many students. Would you like to explore some coping strategies together?"
    ],
    stress: [
      "Academic stress is very common among students. Let's break down what's causing you stress. Is it related to exams, assignments, or something else?",
      "I can help you develop strategies to manage stress. What specific situations trigger your stress the most?",
      "Stress can feel overwhelming, but there are ways to manage it. Would you like to explore some stress-reduction techniques?"
    ],
    crisis: [
      "I'm very concerned about what you've shared. Your safety is the most important thing right now. Please consider calling 988 (Suicide Prevention Lifeline) immediately.",
      "What you're going through sounds incredibly difficult, and I want you to get immediate help. Please reach out to emergency services or call a crisis hotline right now.",
      "I'm worried about your safety. You deserve support right now. Please contact emergency services (911) or the crisis text line (text HOME to 741741) immediately."
    ],
    sleep: [
      "Sleep problems are common among students. Let's discuss your sleep routine. What time do you usually go to bed?",
      "Good sleep hygiene can significantly improve your mental health. Would you like some tips for better sleep?"
    ],
    social: [
      "Building social connections in college can be challenging. What makes it difficult for you to connect with others?",
      "Social support is crucial for mental health. Would you like strategies for building meaningful relationships?"
    ],
    academic: [
      "Academic pressures are a major source of stress for students. What specific academic challenges are you facing?",
      "It sounds like you're dealing with academic stress. Let's explore some strategies to manage your workload more effectively."
    ],
    resources: [
      "I can help you find resources related to your concerns. What specific area would you like to explore - anxiety management, stress relief, academic support, or something else?",
      "There are many resources available to support you. Based on our conversation, I can recommend some specific tools and strategies."
    ],
    default: [
      "I'm here to listen and support you. Can you tell me more about what you're experiencing?",
      "Thank you for sharing. Can you help me understand what's been most challenging for you?",
      "I want to make sure I understand how to best support you. Could you share more details about your situation?"
    ]
  },
  counselors: [
    {"name": "Dr. Sarah Johnson", "specialty": "Anxiety & Depression", "availability": "Mon, Wed, Fri", "experience": "8 years", "approach": "Cognitive Behavioral Therapy"},
    {"name": "Dr. Michael Chen", "specialty": "Academic Stress", "availability": "Tue, Thu", "experience": "6 years", "approach": "Solution-Focused Therapy"},
    {"name": "Dr. Emily Rodriguez", "specialty": "Crisis Intervention", "availability": "Daily", "experience": "12 years", "approach": "Crisis Counseling"},
    {"name": "Dr. James Wilson", "specialty": "Social Anxiety", "availability": "Mon, Tue, Thu", "experience": "5 years", "approach": "Mindfulness-Based Therapy"}
  ],
  moodOptions: [
    {"mood": "Excellent", "value": 5, "color": "#4CAF50", "emoji": "😊", "description": "Feeling great and energetic"},
    {"mood": "Good", "value": 4, "color": "#8BC34A", "emoji": "🙂", "description": "Pretty good overall"},
    {"mood": "Okay", "value": 3, "color": "#FFC107", "emoji": "😐", "description": "Neither good nor bad"},
    {"mood": "Poor", "value": 2, "color": "#FF9800", "emoji": "😟", "description": "Not feeling well"},
    {"mood": "Very Poor", "value": 1, "color": "#F44336", "emoji": "😢", "description": "Really struggling today"}
  ],
  breathingExercises: [
    {"name": "4-7-8 Breathing", "description": "Breathe in for 4, hold for 7, exhale for 8", "duration": "2 minutes"},
    {"name": "Box Breathing", "description": "Breathe in for 4, hold for 4, exhale for 4, hold for 4", "duration": "3 minutes"},
    {"name": "Progressive Relaxation", "description": "Tense and release muscle groups while breathing deeply", "duration": "10 minutes"}
  ]
};

// Global variables
let currentAssessment = null;
let currentQuestionIndex = 0;
let assessmentAnswers = [];
let moodChart = null;
let selectedMood = null;
let isMobile = window.innerWidth < 768;
let isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
let isDesktop = window.innerWidth >= 1024;

// Touch and gesture variables
let touchStartY = 0;
let touchStartX = 0;
let pullDistance = 0;
let isPulling = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupResponsiveHandling();
  setupTouchHandling();
  setupAccessibility();
});

function initializeApp() {
  loadResources();
  loadEmergencyContacts();
  loadCounselors();
  loadMoodOptions();
  initializeMoodChart();
  loadMoodEntries();
  setupEventListeners();
  
  // Show home section by default
  showSection('home');
  
  // Update active nav link
  updateActiveNavLink('home');
  
  // Initialize PWA features
  initializePWA();
}

function setupResponsiveHandling() {
  // Update responsive state on resize
  window.addEventListener('resize', function() {
    const wasDesktop = isDesktop;
    isMobile = window.innerWidth < 768;
    isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    isDesktop = window.innerWidth >= 1024;
    
    // Handle chatbot display changes
    if (wasDesktop !== isDesktop) {
      closeChatbot();
      closeMobileChatbot();
    }
    
    // Update mood chart if needed
    if (moodChart) {
      moodChart.resize();
    }
  });
}

function setupTouchHandling() {
  // Pull to refresh functionality
  let pullToRefresh = document.getElementById('pull-refresh');
  
  document.addEventListener('touchstart', function(e) {
    if (window.scrollY === 0) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });
  
  document.addEventListener('touchmove', function(e) {
    if (window.scrollY === 0 && touchStartY > 0) {
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      pullDistance = touchY - touchStartY;
      
      // Only trigger if pulling down and not swiping horizontally
      if (pullDistance > 0 && Math.abs(touchX - touchStartX) < 50) {
        isPulling = true;
        
        if (pullDistance > 80 && pullToRefresh) {
          pullToRefresh.classList.add('active');
        }
      }
    }
  }, { passive: true });
  
  document.addEventListener('touchend', function() {
    if (isPulling && pullDistance > 80) {
      refreshContent();
    }
    
    if (pullToRefresh) {
      pullToRefresh.classList.remove('active');
    }
    
    touchStartY = 0;
    touchStartX = 0;
    pullDistance = 0;
    isPulling = false;
  }, { passive: true });
}

function setupAccessibility() {
  // Enhanced keyboard navigation
  document.addEventListener('keydown', function(e) {
    // ESC key to close modals and overlays
    if (e.key === 'Escape') {
      closeAssessment();
      stopBreathingExercise();
      stopGroundingExercise();
      closeChatbot();
      closeMobileChatbot();
      closeMobileMenu();
    }
    
    // Enter key for buttons
    if (e.key === 'Enter' && e.target.classList.contains('feature-card')) {
      e.target.click();
    }
  });
  
  // Focus management for modals
  document.addEventListener('focusin', function(e) {
    const modal = e.target.closest('.modal');
    if (modal && !modal.classList.contains('hidden')) {
      // Trap focus within modal
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.target === modal) {
          firstElement.focus();
        }
      }
    }
  });
}

function setupEventListeners() {
  // Resource search
  const resourceSearch = document.getElementById('resource-search');
  if (resourceSearch) {
    resourceSearch.addEventListener('input', debounce(filterResources, 300));
  }
  
  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      filterResources();
    });
  });
  
  // Desktop chatbot input
  const chatbotInput = document.getElementById('chatbot-input');
  if (chatbotInput) {
    chatbotInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  // Mobile chatbot input
  const mobileChatbotInput = document.getElementById('mobile-chatbot-input');
  if (mobileChatbotInput) {
    mobileChatbotInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMobileMessage();
      }
    });
  }
  
  // Appointment form
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleAppointmentBooking);
  }
  
  // Set minimum date for appointments to today
  const appointmentDate = document.getElementById('appointment-date');
  if (appointmentDate) {
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.min = today;
  }
  
  // Modal close functionality - click outside to close
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      closeAssessment();
      stopBreathingExercise();
      stopGroundingExercise();
    }
    
    if (event.target.classList.contains('mobile-nav-overlay')) {
      closeMobileMenu();
    }
  });
}

// Mobile Navigation Functions
function toggleMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const hamburger = document.querySelector('.hamburger-menu');
  
  if (overlay && hamburger) {
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (overlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  const hamburger = document.querySelector('.hamburger-menu');
  
  if (overlay && hamburger) {
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Navigation functions
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section with smooth transition
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    setTimeout(() => {
      targetSection.classList.add('active');
    }, 100);
  }
  
  // Update navigation active state
  updateActiveNavLink(sectionId);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu if open
  closeMobileMenu();
}

function updateActiveNavLink(sectionId) {
  // Update desktop nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Update mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current section links
  document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(link => {
    link.classList.add('active');
  });
}

// Resource functions
function loadResources() {
  const resourcesGrid = document.getElementById('resources-grid');
  if (!resourcesGrid) return;
  
  resourcesGrid.innerHTML = appData.resources.map(resource => `
    <div class="resource-card" data-category="${resource.category}">
      <div class="resource-category">${resource.category}</div>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <div class="resource-meta">
        <span>📖 ${resource.readTime}</span>
        <span>📊 ${resource.difficulty}</span>
      </div>
    </div>
  `).join('');
}

function filterResources() {
  const searchInput = document.getElementById('resource-search');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const activeTab = document.querySelector('.filter-tab.active');
  const activeCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';
  const resourceCards = document.querySelectorAll('.resource-card');
  
  resourceCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const category = card.getAttribute('data-category');
    
    const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;
    
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
      card.style.animation = 'messageSlideIn 0.3s ease-out';
    } else {
      card.style.display = 'none';
    }
  });
}

// Emergency contacts
function loadEmergencyContacts() {
  const emergencyContactsDiv = document.getElementById('emergency-contacts');
  if (!emergencyContactsDiv) return;
  
  emergencyContactsDiv.innerHTML = appData.emergencyContacts.map(contact => `
    <div class="emergency-contact">
      <h4>${contact.name}</h4>
      <div class="emergency-phone">📞 ${contact.phone}</div>
      <div class="emergency-availability">Available: ${contact.available}</div>
      <div class="emergency-type">${contact.type}</div>
    </div>
  `).join('');
}

// Counselor functions
function loadCounselors() {
  const counselorsGrid = document.getElementById('counselors-grid');
  const counselorSelect = document.getElementById('counselor-select');
  
  if (counselorsGrid) {
    const counselorHTML = appData.counselors.map(counselor => `
      <div class="counselor-card">
        <h4>${counselor.name}</h4>
        <p><strong>Specialty:</strong> ${counselor.specialty}</p>
        <p><strong>Available:</strong> ${counselor.availability}</p>
        <p><strong>Experience:</strong> ${counselor.experience}</p>
        <p><strong>Approach:</strong> ${counselor.approach}</p>
      </div>
    `).join('');
    counselorsGrid.innerHTML = counselorHTML;
  }
  
  if (counselorSelect) {
    const selectOptions = appData.counselors.map(counselor => `
      <option value="${counselor.name}">${counselor.name} - ${counselor.specialty}</option>
    `).join('');
    counselorSelect.innerHTML += selectOptions;
  }
}

// Appointment booking
function handleAppointmentBooking(e) {
  e.preventDefault();
  
  const appointmentData = {
    counselor: document.getElementById('counselor-select').value,
    date: document.getElementById('appointment-date').value,
    time: document.getElementById('appointment-time').value,
    name: document.getElementById('patient-name').value,
    email: document.getElementById('patient-email').value
  };
  
  // Show success message with better UX
  showNotification(
    'success',
    'Appointment Booked!',
    `Your appointment with ${appointmentData.counselor} on ${new Date(appointmentData.date).toLocaleDateString()} at ${appointmentData.time} has been scheduled. A confirmation email will be sent to ${appointmentData.email}.`
  );
  
  e.target.reset();
}

// Enhanced notification system
function showNotification(type, title, message) {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
  `;
  
  // Add styles if not already present
  if (!document.querySelector('.notification-styles')) {
    const styles = document.createElement('style');
    styles.className = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
      }
      .notification--success {
        background: var(--color-success);
        color: white;
      }
      .notification--error {
        background: var(--color-error);
        color: white;
      }
      .notification-content h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
      }
      .notification-content p {
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.9;
      }
      .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.2s;
      }
      .notification-close:hover {
        background: rgba(255,255,255,0.2);
      }
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @media (max-width: 768px) {
        .notification {
          left: 20px;
          right: 20px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(styles);
  }
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Mood tracking functions
function loadMoodOptions() {
  const moodOptionsDiv = document.getElementById('mood-options');
  if (!moodOptionsDiv) return;
  
  moodOptionsDiv.innerHTML = appData.moodOptions.map(mood => `
    <div class="mood-option" onclick="selectMood(${mood.value})" data-mood="${mood.value}" title="${mood.description}">
      <span class="mood-emoji">${mood.emoji}</span>
      <span class="mood-label">${mood.mood}</span>
    </div>
  `).join('');
}

function selectMood(value) {
  selectedMood = value;
  document.querySelectorAll('.mood-option').forEach(option => {
    option.classList.remove('selected');
  });
  const selectedOption = document.querySelector(`[data-mood="${value}"]`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
}

function saveMoodEntry() {
  if (!selectedMood) {
    showNotification('error', 'Selection Required', 'Please select a mood first.');
    return;
  }
  
  const notesInput = document.getElementById('mood-notes');
  const notes = notesInput ? notesInput.value : '';
  const date = new Date().toISOString().split('T')[0];
  
  const moodEntry = {
    date: date,
    mood: selectedMood,
    notes: notes,
    timestamp: new Date().toISOString()
  };
  
  let moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
  
  // Remove any existing entry for today
  moodEntries = moodEntries.filter(entry => entry.date !== date);
  moodEntries.push(moodEntry);
  
  localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
  
  // Reset form
  selectedMood = null;
  document.querySelectorAll('.mood-option').forEach(option => {
    option.classList.remove('selected');
  });
  if (notesInput) {
    notesInput.value = '';
  }
  
  // Refresh displays
  loadMoodEntries();
  updateMoodChart();
  
  showNotification('success', 'Mood Saved!', 'Your mood entry has been saved successfully.');
}

function loadMoodEntries() {
  const moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
  const moodEntriesDiv = document.getElementById('mood-entries');
  if (!moodEntriesDiv) return;
  
  const sortedEntries = moodEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  moodEntriesDiv.innerHTML = sortedEntries.slice(0, 10).map(entry => {
    const moodOption = appData.moodOptions.find(m => m.value === entry.mood);
    return `
      <div class="mood-entry">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">${moodOption.emoji}</span>
            <strong>${moodOption.mood}</strong>
          </span>
          <small>${new Date(entry.date).toLocaleDateString()}</small>
        </div>
        ${entry.notes ? `<p style="margin: 0; color: var(--color-text-secondary); font-size: var(--font-size-sm); line-height: 1.4;">${entry.notes}</p>` : ''}
      </div>
    `;
  }).join('');
}

function initializeMoodChart() {
  const canvas = document.getElementById('mood-chart');
  if (!canvas || typeof Chart === 'undefined') return;
  
  const ctx = canvas.getContext('2d');
  moodChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Mood Level',
        data: [],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#1FB8CD',
        pointBorderWidth: 2,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1,
            callback: function(value) {
              const labels = ['', 'Very Poor', 'Poor', 'Okay', 'Good', 'Excellent'];
              return labels[value] || '';
            }
          }
        },
        x: {
          ticks: {
            maxTicksLimit: 7
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const labels = ['', 'Very Poor', 'Poor', 'Okay', 'Good', 'Excellent'];
              return labels[context.parsed.y] || '';
            }
          }
        }
      }
    }
  });
  
  updateMoodChart();
}

function updateMoodChart() {
  if (!moodChart) return;
  
  const moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
  const sortedEntries = moodEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const last30Days = sortedEntries.slice(-30);
  
  moodChart.data.labels = last30Days.map(entry => new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  moodChart.data.datasets[0].data = last30Days.map(entry => entry.mood);
  moodChart.update('none'); // No animation for better performance
}

// Assessment functions
function startAssessment(type) {
  currentAssessment = type;
  currentQuestionIndex = 0;
  assessmentAnswers = [];
  
  const modal = document.getElementById('assessment-modal');
  const title = document.getElementById('assessment-title');
  
  if (title) {
    const titles = {
      'phq9': 'PHQ-9 Depression Assessment',
      'gad7': 'GAD-7 Anxiety Assessment',
      'stress': 'Student Stress Assessment'
    };
    title.textContent = titles[type] || 'Assessment';
  }
  
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showAssessmentQuestion();
  }
}

function showAssessmentQuestion() {
  const questions = appData.assessmentQuestions[currentAssessment];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  
  // Update progress
  const progressBar = document.getElementById('assessment-progress');
  if (progressBar) {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
  }
  
  // Show question
  const content = document.getElementById('assessment-content');
  if (content) {
    const scaleText = currentAssessment === 'stress' ? 
      'Please rate how much this applies to you:' : 
      'Over the last 2 weeks, how often have you been bothered by:';
    
    const options = currentAssessment === 'stress' ? [
      'Never (0)',
      'Rarely (1)', 
      'Sometimes (2)',
      'Often (3)',
      'Always (4)'
    ] : [
      'Not at all (0)',
      'Several days (1)',
      'More than half the days (2)',
      'Nearly every day (3)'
    ];
    
    content.innerHTML = `
      <div class="question-container">
        <h4>Question ${currentQuestionIndex + 1} of ${totalQuestions}</h4>
        <p><strong>${scaleText}</strong></p>
        <p style="font-size: 1.1rem; margin: 1.5rem 0;">${currentQuestion.question}</p>
        <div class="question-options">
          ${options.map((option, index) => `
            <div class="question-option" onclick="selectAnswer(${index})" tabindex="0" role="button">
              ${option}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Add keyboard support for options
    content.querySelectorAll('.question-option').forEach((option, index) => {
      option.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAnswer(index);
        }
      });
    });
  }
}

function selectAnswer(value) {
  assessmentAnswers[currentQuestionIndex] = value;
  
  // Highlight selected option
  document.querySelectorAll('.question-option').forEach(option => {
    option.classList.remove('selected');
  });
  event.target.classList.add('selected');
  
  // Auto-advance after short delay
  setTimeout(() => {
    nextQuestion();
  }, 600);
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < appData.assessmentQuestions[currentAssessment].length) {
    showAssessmentQuestion();
  } else {
    showAssessmentResults();
  }
}

function showAssessmentResults() {
  const totalScore = assessmentAnswers.reduce((sum, score) => sum + score, 0);
  const content = document.getElementById('assessment-content');
  if (!content) return;
  
  let interpretation = '';
  let recommendations = '';
  let severity = '';
  
  if (currentAssessment === 'phq9') {
    if (totalScore <= 4) {
      interpretation = 'Minimal depression';
      severity = 'low';
      recommendations = 'Your responses suggest minimal symptoms of depression. Continue practicing self-care and maintain healthy habits like regular exercise, good sleep, and social connections.';
    } else if (totalScore <= 9) {
      interpretation = 'Mild depression';
      severity = 'mild';
      recommendations = 'Your responses suggest mild depression symptoms. Consider speaking with a counselor, practicing mindfulness, and maintaining a structured daily routine.';
    } else if (totalScore <= 14) {
      interpretation = 'Moderate depression';
      severity = 'moderate';
      recommendations = 'Your responses suggest moderate depression symptoms. We strongly recommend speaking with a mental health professional for proper evaluation and support.';
    } else {
      interpretation = 'Severe depression';
      severity = 'severe';
      recommendations = 'Your responses suggest severe depression symptoms. Please seek professional help immediately. Consider contacting our counseling services or crisis support.';
    }
  } else if (currentAssessment === 'gad7') {
    if (totalScore <= 4) {
      interpretation = 'Minimal anxiety';
      severity = 'low';
      recommendations = 'Your responses suggest minimal anxiety symptoms. Continue practicing stress management techniques like deep breathing and regular physical activity.';
    } else if (totalScore <= 9) {
      interpretation = 'Mild anxiety';
      severity = 'mild';
      recommendations = 'Your responses suggest mild anxiety symptoms. Consider learning anxiety management techniques, practicing mindfulness, or speaking with a counselor.';
    } else if (totalScore <= 14) {
      interpretation = 'Moderate anxiety';
      severity = 'moderate';
      recommendations = 'Your responses suggest moderate anxiety symptoms. We recommend speaking with a mental health professional for anxiety management strategies.';
    } else {
      interpretation = 'Severe anxiety';
      severity = 'severe';
      recommendations = 'Your responses suggest severe anxiety symptoms. Please consider seeking professional help immediately for comprehensive anxiety treatment.';
    }
  } else if (currentAssessment === 'stress') {
    if (totalScore <= 8) {
      interpretation = 'Low stress levels';
      severity = 'low';
      recommendations = 'You appear to be managing stress well. Continue with your current coping strategies and maintain work-life balance.';
    } else if (totalScore <= 12) {
      interpretation = 'Moderate stress levels';
      severity = 'mild';
      recommendations = 'You\'re experiencing moderate stress. Consider time management techniques, regular breaks, and stress-reduction activities.';
    } else if (totalScore <= 16) {
      interpretation = 'High stress levels';
      severity = 'moderate';
      recommendations = 'You\'re experiencing high stress levels. We recommend speaking with an academic counselor and learning stress management techniques.';
    } else {
      interpretation = 'Very high stress levels';
      severity = 'severe';
      recommendations = 'You\'re experiencing very high stress levels. Please consider speaking with a counselor immediately for support and stress management strategies.';
    }
  }
  
  content.innerHTML = `
    <div class="results-container">
      <div class="results-header">
        <h3>Assessment Results</h3>
        <div class="score-display severity-${severity}">
          <div class="score-number">${totalScore}</div>
          <div class="score-interpretation">
            <strong>${interpretation}</strong>
          </div>
        </div>
      </div>
      
      <div class="recommendations">
        <h4>Personalized Recommendations:</h4>
        <p>${recommendations}</p>
      </div>
      
      <div class="next-steps">
        <h4>What's Next?</h4>
        <div class="action-buttons">
          <button class="btn btn--primary" onclick="closeAssessment(); showSection('appointments');">
            📅 Book Appointment
          </button>
          <button class="btn btn--outline" onclick="closeAssessment(); showSection('resources');">
            📚 View Resources  
          </button>
          <button class="btn btn--outline" onclick="closeAssessment(); openChatbot();">
            💬 Chat Support
          </button>
        </div>
      </div>
      
      <div class="disclaimer">
        <p><small><strong>Important:</strong> This is a screening tool and not a diagnostic instrument. Please consult with a qualified mental health professional for proper evaluation and treatment.</small></p>
      </div>
    </div>
  `;
  
  // Add result-specific styles
  if (!document.querySelector('.results-styles')) {
    const styles = document.createElement('style');
    styles.className = 'results-styles';
    styles.textContent = `
      .results-container { text-align: center; }
      .results-header { margin-bottom: 2rem; }
      .score-display { 
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 12px;
        margin: 1rem 0;
      }
      .severity-low { background: var(--color-bg-3); }
      .severity-mild { background: var(--color-bg-2); }
      .severity-moderate { background: var(--color-bg-6); }
      .severity-severe { background: var(--color-bg-4); }
      .score-number {
        font-size: 2rem;
        font-weight: bold;
        min-width: 60px;
      }
      .score-interpretation { text-align: left; }
      .recommendations, .next-steps {
        margin: 1.5rem 0;
        text-align: left;
      }
      .action-buttons {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1rem 0;
      }
      .disclaimer {
        background: var(--color-secondary);
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1.5rem;
      }
      @media (max-width: 768px) {
        .score-display { flex-direction: column; text-align: center; }
        .score-interpretation { text-align: center; }
        .action-buttons { flex-direction: column; }
      }
    `;
    document.head.appendChild(styles);
  }
}

function closeAssessment() {
  const modal = document.getElementById('assessment-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  currentAssessment = null;
  currentQuestionIndex = 0;
  assessmentAnswers = [];
}

// Enhanced Chatbot functions
function openChatbot() {
  if (isMobile) {
    openMobileChatbot();
  } else {
    const chatbot = document.getElementById('chatbot-container');
    if (chatbot) {
      chatbot.style.display = 'flex';
      
      // Add initial greeting if no messages
      const messages = document.getElementById('chatbot-messages');
      if (messages && messages.children.length === 0) {
        addBotMessage(getRandomResponse('greeting'));
      }
      
      // Focus input
      const input = document.getElementById('chatbot-input');
      if (input) input.focus();
    }
  }
}

function openMobileChatbot() {
  const mobileChatbot = document.getElementById('mobile-chatbot-overlay');
  if (mobileChatbot) {
    mobileChatbot.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add initial greeting if no messages
    const messages = document.getElementById('mobile-chatbot-messages');
    if (messages && messages.children.length === 0) {
      addMobileBotMessage(getRandomResponse('greeting'));
    }
    
    // Focus input
    const input = document.getElementById('mobile-chatbot-input');
    if (input) input.focus();
  }
}

function closeChatbot() {
  const chatbot = document.getElementById('chatbot-container');
  if (chatbot) {
    chatbot.style.display = 'none';
  }
}

function closeMobileChatbot() {
  const mobileChatbot = document.getElementById('mobile-chatbot-overlay');
  if (mobileChatbot) {
    mobileChatbot.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  if (!input) return;
  
  const message = input.value.trim();
  
  if (!message) return;
  
  addUserMessage(message);
  input.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  // Simulate typing delay
  setTimeout(() => {
    hideTypingIndicator();
    const response = generateBotResponse(message);
    addBotMessage(response);
  }, 1000 + Math.random() * 1000);
}

function sendMobileMessage() {
  const input = document.getElementById('mobile-chatbot-input');
  if (!input) return;
  
  const message = input.value.trim();
  
  if (!message) return;
  
  addMobileUserMessage(message);
  input.value = '';
  
  // Show typing indicator
  showMobileTypingIndicator();
  
  // Simulate typing delay
  setTimeout(() => {
    hideMobileTypingIndicator();
    const response = generateBotResponse(message);
    addMobileBotMessage(response);
  }, 1000 + Math.random() * 1000);
}

function addUserMessage(message) {
  const messagesDiv = document.getElementById('chatbot-messages');
  if (!messagesDiv) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user';
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addBotMessage(message) {
  const messagesDiv = document.getElementById('chatbot-messages');
  if (!messagesDiv) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot';
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addMobileUserMessage(message) {
  const messagesDiv = document.getElementById('mobile-chatbot-messages');
  if (!messagesDiv) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user';
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addMobileBotMessage(message) {
  const messagesDiv = document.getElementById('mobile-chatbot-messages');
  if (!messagesDiv) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot';
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showTypingIndicator() {
  const messagesDiv = document.getElementById('chatbot-messages');
  if (!messagesDiv) return;
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot typing-indicator';
  typingDiv.innerHTML = '<span>•</span><span>•</span><span>•</span>';
  typingDiv.id = 'typing-indicator';
  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

function showMobileTypingIndicator() {
  const messagesDiv = document.getElementById('mobile-chatbot-messages');
  if (!messagesDiv) return;
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot typing-indicator';
  typingDiv.innerHTML = '<span>•</span><span>•</span><span>•</span>';
  typingDiv.id = 'mobile-typing-indicator';
  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function hideMobileTypingIndicator() {
  const indicator = document.getElementById('mobile-typing-indicator');
  if (indicator) indicator.remove();
}

function getRandomResponse(category) {
  const responses = appData.chatbotResponses[category];
  if (Array.isArray(responses)) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
  return responses || appData.chatbotResponses.default[0];
}

function generateBotResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Crisis detection - highest priority
  const crisisKeywords = ['suicide', 'kill myself', 'end it all', 'don\'t want to live', 'hurt myself', 'ending it', 'better off dead'];
  if (crisisKeywords.some(keyword => message.includes(keyword))) {
    return getRandomResponse('crisis') + " Here are immediate resources: National Suicide Prevention Lifeline: 988, Crisis Text Line: Text HOME to 741741. Please reach out right now.";
  }
  
  // Mental health keywords
  if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried') || message.includes('panic') || message.includes('nervous')) {
    return getRandomResponse('anxiety');
  }
  
  if (message.includes('depressed') || message.includes('sad') || message.includes('hopeless') || message.includes('down') || message.includes('empty')) {
    return getRandomResponse('depression');
  }
  
  if (message.includes('stressed') || message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure') || message.includes('burned out')) {
    return getRandomResponse('stress');
  }
  
  // Sleep and wellness
  if (message.includes('sleep') || message.includes('tired') || message.includes('insomnia') || message.includes('can\'t sleep')) {
    return getRandomResponse('sleep');
  }
  
  // Social concerns
  if (message.includes('lonely') || message.includes('friends') || message.includes('social') || message.includes('isolated')) {
    return getRandomResponse('social');
  }
  
  // Academic concerns
  if (message.includes('exam') || message.includes('test') || message.includes('assignment') || message.includes('study') || message.includes('grades')) {
    return getRandomResponse('academic');
  }
  
  // Greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
    return "Hello! I'm here to listen and support you. What's on your mind today?";
  }
  
  // Help requests
  if (message.includes('help') || message.includes('support') || message.includes('need someone')) {
    return getRandomResponse('resources');
  }
  
  // Gratitude
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're very welcome! I'm here whenever you need support. Is there anything else I can help you with today?";
  }
  
  // Default supportive response
  return getRandomResponse('default');
}

// Breathing exercise functions
function startBreathingExercise() {
  const modal = document.getElementById('breathing-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    const circle = document.getElementById('breathing-circle-large');
    const instruction = document.getElementById('breathing-instruction');
    
    let phase = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold
    const phases = ['Breathe in...', 'Hold...', 'Breathe out...', 'Hold...'];
    const durations = [4000, 1000, 6000, 1000]; // in milliseconds
    
    function cycleBreathing() {
      if (modal.classList.contains('hidden')) return;
      
      if (instruction) {
        instruction.textContent = phases[phase];
      }
      
      setTimeout(() => {
        phase = (phase + 1) % 4;
        if (!modal.classList.contains('hidden')) {
          cycleBreathing();
        }
      }, durations[phase]);
    }
    
    cycleBreathing();
  }
}

function stopBreathingExercise() {
  const modal = document.getElementById('breathing-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Grounding exercise functions
function startGroundingExercise() {
  const modal = document.getElementById('grounding-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    const content = document.getElementById('grounding-content');
    const steps = [
      { count: 5, sense: 'see', instruction: 'Name 5 things you can see around you' },
      { count: 4, sense: 'touch', instruction: 'Name 4 things you can touch' },
      { count: 3, sense: 'hear', instruction: 'Name 3 things you can hear' },
      { count: 2, sense: 'smell', instruction: 'Name 2 things you can smell' },
      { count: 1, sense: 'taste', instruction: 'Name 1 thing you can taste' }
    ];
    
    let currentStep = 0;
    
    function showStep() {
      if (currentStep >= steps.length) {
        content.innerHTML = `
          <div class="grounding-complete">
            <h3>🌟 Well Done!</h3>
            <p>You've completed the grounding exercise. Take a moment to notice how you feel now.</p>
            <button class="btn btn--primary" onclick="stopGroundingExercise()">Finish</button>
          </div>
        `;
        return;
      }
      
      const step = steps[currentStep];
      content.innerHTML = `
        <div class="grounding-step">
          <h3>Step ${currentStep + 1} of 5</h3>
          <div class="grounding-count">${step.count}</div>
          <p class="grounding-instruction">${step.instruction}</p>
          <button class="btn btn--primary" onclick="nextGroundingStep()">Next</button>
          <button class="btn btn--outline" onclick="stopGroundingExercise()">Stop</button>
        </div>
      `;
    }
    
    window.nextGroundingStep = function() {
      currentStep++;
      showStep();
    };
    
    showStep();
  }
}

function stopGroundingExercise() {
  const modal = document.getElementById('grounding-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// PWA and offline functionality
function initializePWA() {
  // Service Worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful');
      }, function(err) {
        console.log('ServiceWorker registration failed');
      });
    });
  }
  
  // Install prompt
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt();
  });
}

function showInstallPrompt() {
  // Show install button or prompt
  const installButton = document.createElement('button');
  installButton.textContent = '📱 Install App';
  installButton.className = 'btn btn--outline install-prompt';
  installButton.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 20px;
    z-index: 999;
    animation: slideInLeft 0.3s ease-out;
  `;
  
  installButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        deferredPrompt = null;
        installButton.remove();
      });
    }
  });
  
  document.body.appendChild(installButton);
  
  // Auto-hide after 10 seconds
  setTimeout(() => {
    if (installButton.parentNode) {
      installButton.remove();
    }
  }, 10000);
}

function refreshContent() {
  // Simulate content refresh
  showNotification('success', 'Refreshed!', 'Content has been updated.');
  
  // Refresh mood chart and entries
  loadMoodEntries();
  updateMoodChart();
  
  // Refresh resources
  loadResources();
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

// Initialize Chart.js defaults
if (typeof Chart !== 'undefined') {
  Chart.defaults.color = 'var(--color-text)';
  Chart.defaults.borderColor = 'var(--color-border)';
  Chart.defaults.font.family = 'var(--font-family-base)';
}