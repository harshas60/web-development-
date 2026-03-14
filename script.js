let slider = document.getElementById("slider");

if (slider) {

    let next = document.getElementById("nextBtn");
    let prev = document.getElementById("prevBtn");

    let index = 0;
    let total = document.querySelectorAll(".graph-card").length;

    function updateSlider() {
        slider.style.transform = `translateX(-${index*100}%)`;
        console.log(`Slider updated to index: ${index}`);
    }

    next.onclick = function() {
        if (index < total - 1) {
            index++;
            updateSlider();
            console.log("Next button clicked");
        }
    }

    prev.onclick = function() {
        if (index > 0) {
            index--;
            updateSlider();
            console.log("Prev button clicked");
        }
    }

    /* Charts */

    new Chart(document.getElementById("chart1"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Performance Growth",
                data: [30, 50, 40, 60, 75, 90],
                borderColor: "rgb(255, 60, 172)",
                backgroundColor: "rgba(255, 60, 172, 0.1)",
                fill: true,
                tension: 0.4,
                pointBackgroundColor: "rgb(255, 60, 172)",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
    console.log("Chart1 created");

    new Chart(document.getElementById("chart2"), {
        type: "bar",
        data: {
            labels: ["USA", "UK", "India", "Canada", "Australia"],
            datasets: [{
                label: "Regional Performance",
                data: [12, 19, 7, 15, 10],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)"
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)"
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
    console.log("Chart2 created");

    new Chart(document.getElementById("chart3"), {
        type: "doughnut",
        data: {
            labels: ["Completed Projects", "Pending Projects"],
            datasets: [{
                data: [60, 40],
                backgroundColor: [
                    "rgb(0, 255, 0)",
                    "rgb(255, 165, 0)"
                ],
                borderColor: [
                    "rgb(0, 255, 0)",
                    "rgb(255, 165, 0)"
                ],
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
    console.log("Chart3 created");

    // Index page charts
    if (document.getElementById("indexChart1")) {
        new Chart(document.getElementById("indexChart1"), {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "User Growth",
                    data: [100, 200, 350, 500, 700, 1000],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.1)",
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: "rgb(255, 99, 132)",
                    pointBorderColor: "#fff",
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
        console.log("Index Chart1 created");

        new Chart(document.getElementById("indexChart2"), {
            type: "pie",
            data: {
                labels: ["Design", "Development", "Marketing", "Consulting"],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)"
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)"
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
        console.log("Index Chart2 created");

        new Chart(document.getElementById("indexChart3"), {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Monthly Revenue ($k)",
                    data: [15, 22, 18, 28, 35, 42],
                    backgroundColor: "rgb(153, 102, 255)",
                    borderColor: "rgb(153, 102, 255)",
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
        console.log("Index Chart3 created");
    }

}

/* AUTH FORMS */

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        if (!email) return;
        alert('Welcome back! You are now signed in.');
        loginForm.reset();
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;

        if (password !== confirm) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        alert('Account created successfully! Redirecting to login...');
        signupForm.reset();
        window.location.href = 'login.html';
    });
}