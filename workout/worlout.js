function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.getHours() + ":" + now.getMinutes();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

  
  var options = {
    series: [{
    data: [0, 0, 70, 60]
  },
  {
    data: [0, 0, 20, 70]
  },
  {
    data: [0, 0, 10, 30]
  },
],
    chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 5,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['12.00', '6.00', '12.00', '6.00'],
  },
  yaxis: {
    categories: ['1200', '1900'],
  },
  fill: {
    opacity: 1
  },
  
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
let currentSlideIndex = 0;

nextBtn.addEventListener('click', () => {
    // Hide the current slide
    slides[currentSlideIndex].classList.add('hidden');
    
    // Move to the next slide
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Reset to the first slide if reached the end
    }
    
    // Show the next slide
    slides[currentSlideIndex].classList.remove('hidden');
});


//for calendra


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    initialDate: '2024-03-07',
    editable: false,
    eventLimit: false,
    headerToolbar: {
      left: 'prev next',
      center: 'title',
      right: ''
    },

    events: [
      {
        title: 'All Day Event',
        start: '2024-03-01T16:00:00'
      },
      {
        title: 'Long Event',
        start: '2024-03-07',
        end: '2024-03-10T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-03-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2024-03-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2024-03-11',
        end: '2024-03-13'
      },
      {
        title: 'Meeting',
        start: '2024-03-12T10:30:00',
        end: '2024-03-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2024-03-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2024-03-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2024-03-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2024-03-28'
      }
    ]

    
  });

  calendar.render();
});





