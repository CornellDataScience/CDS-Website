<template>
    <Team
    title="Intelligent Systems"
    v-bind:leads="teamleads"
    v-bind:advisor="advisor"
    v-bind:about="about"
    v-bind:current="current"
    v-bind:past="past"
    v-bind:members="members"
    ></Team> 
</template>

<script>
export default {
    data() {
        return {
            teamleads: [
                {
                    name: "Stephan Tse",
                    link: "https://example.com"
                },
                {
                    name: "Phillip Si",
                    link: "https://example.com"
                }
            ],
            advisor: {
                name: "Prof. Thorsten Joachims",
                link: "https://www.cs.cornell.edu/people/tj/"
            },
            about: "We operate at the intersection of the latest research in machine learning and practical engineering to create useful products for society. Our work always has a strong outreach/user focus and a strong connection to machine learning.<br></br>Check out the CDS Medium <a href=\"https://cornell-data.medium.com/\">here</a>, where we post articles summarizing and discussing popular ML research papers.",
            current: [
                {
                    title: "Poker Bot: An AI to play Texas Hold'Em",
                    link: "https://github.com/st-tse/neuron_poker_bot"
                },
                {
                    title: "Kernel Density Estimator for Logistical Tasks",
                    link: "https://github.com/peterhusisian/Logistical-Kernel-Density-Estimation"
                },
                {
                    title: "MyCourseIndex: Improved search engine for Piazza (a cross-subteam collaboration)",
                    link: "https://github.com/oscarso2000/MyCourseIndex"
                }
            ],
            past: [
                {
                    title: "Fairmandering: Redrawing fairer district lines",
                    link: "https://github.com/st-tse/neuron_poker_bot"
                },
                {
                    title: "Forage: A platform for analyzing urban housing trends",
                    link: "https://github.com/peterhusisian/Logistical-Kernel-Density-Estimation"
                },
                {
                    title: "Pleio: Audio deidentification for prescription phone calls",
                    link: "https://github.com/oscarso2000/MyCourseIndex"
                },
                {
                    title: "Stanford Medical: Analyzing the correlation between county health data and mortality rates",
                    link: "https://github.com/st-tse/neuron_poker_bot"
                },
                {
                    title: "AIR: Aerial Intelligence for Responders",
                    link: "https://github.com/peterhusisian/Logistical-Kernel-Density-Estimation"
                },
                {
                    title: "Vocal Isolation: Separating sounds for storytelling",
                    link: "https://github.com/oscarso2000/MyCourseIndex"
                },
                {
                    title: "Amazon Review Summarization: Clustering and autoencoders for review distillation",
                    link: "https://github.com/st-tse/neuron_poker_bot"
                },
                {
                    title: "Seedlings: Image classification of different types of maize",
                    link: "https://github.com/peterhusisian/Logistical-Kernel-Density-Estimation"
                }
            ],
            members: {
                seniors: [
                    {
                        name: "Peter Husisian",
                        link: "https://github.com/peterhusisian" 
                    },
                    {
                        name: "Stephen Tse",
                        link: "https://github.com/st-tse"
                    },
                    {
                        name: "Katie Yang",
                        link: "https://github.com/yangkt"
                    }
                ],
                juniors: [
                    {
                        name: "Bonnie Akhavan",
                        link: "https://github.com/bcakhavan" 
                    },
                    {
                        name: "Victor Butoi",
                        link: "https://github.com/VictorButoi"
                    },
                    {
                        name: "Phillip Si",
                        link: "https://github.com/ps789"
                    },
                    {
                        name: "Cora Wu",
                        link: "https://github.com/cjw322"
                    }
                ]
            }
        }   
    }
}
</script>

