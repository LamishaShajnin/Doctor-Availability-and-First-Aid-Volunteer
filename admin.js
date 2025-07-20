document.querySelectorAll('.accept-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = btn.closest('tr');
      row.querySelector('td:nth-child(4)').textContent = 'Accepted';
      row.querySelector('.reject-btn').disabled = true;
      btn.disabled = true;
    });
  });

  document.querySelectorAll('.reject-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = btn.closest('tr');
      row.querySelector('td:nth-child(4)').textContent = 'Rejected';
      row.querySelector('.accept-btn').disabled = true;
      btn.disabled = true;
    });
  });

  // Chart.js - Bar Graph
  const barCtx = document.createElement('canvas');
  document.querySelector('.bar-graph').appendChild(barCtx);
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Responder A', 'Responder B', 'Responder C'],
      datasets: [{
        label: 'Cases Handled',
        data: [12, 19, 7],
        backgroundColor: ['#0a74da', '#28a745', '#ffc107'],
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Cases Handled by Responders' }
      }
    }
  });

  // Chart.js - Pie Chart
  const pieCtx = document.createElement('canvas');
  document.querySelector('.pie-chart').appendChild(pieCtx);
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Accepted', 'Rejected', 'Pending'],
      datasets: [{
        label: 'Request Status',
        data: [10, 4, 6],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: 'Request Status Distribution' }
      }
    }
  });

let resDetails = document.querySelector('.responder-details');
let acceptReject = document.querySelector('.accept-reject');
let graphs = document.querySelector('.graph');


let dashboardLi = document.querySelector('.dashboard');
let respondDetailsLi = document.querySelector('.resDet');
let vewReqLi = document.querySelector('.vReq');
let satatusLi = document.querySelector('.stat');


respondDetailsLi.addEventListener('click', function () {
  resDetails.style.display = 'block';
  acceptReject.style.display = 'none';
  graphs.style.display = 'none'; 
});
vewReqLi.addEventListener('click', function () {
  resDetails.style.display = 'none';
  acceptReject.style.display = 'block';
  graphs.style.display = 'none'; 
});

satatusLi.addEventListener('click', function () {
  resDetails.style.display = 'none';
  acceptReject.style.display = 'none';
  graphs.style.display = 'block'; 
});

dashboardLi.addEventListener('click', function () {
  resDetails.style.display = 'block';
  acceptReject.style.display = 'block';
  graphs.style.display = 'block'; 
});