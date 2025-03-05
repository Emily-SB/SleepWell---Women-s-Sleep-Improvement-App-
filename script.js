const personalInfoForm = document.getElementById('personal-info-form');
const progressDiv = document.getElementById('progress');
const suggestionsDiv = document.getElementById('suggestions');

// Handle form submission
personalInfoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh on form submission

    // Collect data from the form
      const age = document.getElementById('age').value;
        const cycle = document.getElementById('cycle').value;
          const sleepQuality = document.getElementById('sleep-quality').value;
            const environment = document.getElementById('environment').value;
              const caffeine = document.getElementById('caffeine').value;
                const exercise = document.getElementById('exercise').value;
                  const routine = document.getElementById('routine').value;

                    // Store collected data
                      const userInfo = { age, cycle, sleepQuality, environment, caffeine, exercise, routine };

                        // Display progress
                          updateProgress(userInfo);
                            provideSuggestions(userInfo);
                            });

                            // Function to update the sleep progress
                            function updateProgress(userInfo) {
                              progressDiv.innerHTML = `
                                  <p><strong>Age:</strong> ${userInfo.age} years</p>
                                      <p><strong>Menstrual Cycle:</strong> ${userInfo.cycle}</p>
                                          <p><strong>Sleep Quality:</strong> ${userInfo.sleepQuality} / 5</p>
                                              <p><strong>Sleep Environment:</strong> ${userInfo.environment}</p>
                                                  <p><strong>Caffeine or Large Meals Near Bedtime:</strong> ${userInfo.caffeine}</p>
                                                      <p><strong>Exercise Frequency:</strong> ${userInfo.exercise}</p>
                                                          <p><strong>Consistent Bedtime Routine:</strong> ${userInfo.routine}</p>
                                                            `;
                                                            }

                                                            // Function to provide personalized suggestions based on user data
                                                            function provideSuggestions(userInfo) {
                                                              const { age, cycle, sleepQuality, environment, caffeine, exercise, routine } = userInfo;
                                                                let suggestions = [];

                                                                  // Suggest sleep improvements based on age
                                                                    if (age < 25) {
                                                                        suggestions.push("You may benefit from longer sleep durations. Aim for 8-9 hours of sleep.");
                                                                          } else if (age >= 25 && age <= 40) {
                                                                              suggestions.push("Focus on maintaining a regular sleep schedule. Try to avoid caffeine before bed.");
                                                                                } else if (age > 40) {
                                                                                    suggestions.push("Consider incorporating relaxation techniques like meditation before bed to help with sleep quality.");
                                                                                      }

                                                                                        // Suggest based on menstrual cycle
                                                                                          if (cycle === "irregular") {
                                                                                              suggestions.push("Irregular cycles can impact sleep. Try tracking your sleep along with your cycle to better understand patterns.");
                                                                                                }

                                                                                                  // Suggest improvements based on sleep quality
                                                                                                    if (sleepQuality <= 2) {
                                                                                                        suggestions.push("Sleep quality seems low. Try reducing screen time at night and focusing on creating a calming bedtime routine.");
                                                                                                          } else if (sleepQuality >= 3 && sleepQuality <= 4) {
                                                                                                              suggestions.push("Your sleep quality is average. A consistent bedtime and relaxation techniques can help improve your rest.");
                                                                                                                } else if (sleepQuality === 5) {
                                                                                                                    suggestions.push("Great sleep quality! Keep maintaining your good sleep habits.");
                                                                                                                      }

                                                                                                                        // Suggest based on environment
                                                                                                                          if (environment === "noisy-bright") {
                                                                                                                              suggestions.push("Consider using blackout curtains or earplugs to reduce light and noise. This can improve sleep quality significantly.");
                                                                                                                                }

                                                                                                                                  // Suggest improvements based on caffeine and meals
                                                                                                                                    if (caffeine === "often") {
                                                                                                                                        suggestions.push("Avoid caffeine after 2 PM to ensure it doesn't interfere with your sleep.");
                                                                                                                                          }

                                                                                                                                            // Suggest based on exercise
                                                                                                                                              if (exercise === "rarely" || exercise === "never") {
                                                                                                                                                  suggestions.push("Regular physical activity can improve your sleep. Try incorporating light exercise into your daily routine.");
                                                                                                                                                    }

                                                                                                                                                      // Suggest based on bedtime routine
                                                                                                                                                        if (routine === "no") {
                                                                                                                                                            suggestions.push("Establish a calming bedtime routine, like reading or meditation, to help signal to your body that it's time to sleep.");
                                                                                                                                                              }

                                                                                                                                                                // Display the suggestions
                                                                                                                                                                  suggestionsDiv.innerHTML = suggestions.map(suggestion => `<p>${suggestion}</p>`).join('');
                                                                                                                                                                  }
                                                                                                                                                                  