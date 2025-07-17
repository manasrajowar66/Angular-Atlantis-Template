import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-blog-list',
    templateUrl: './list.component.html',
    imports: [DataViewModule, DividerModule, CommonModule]
})
export class ListComponent {
    blogs = signal<any>([]);
    recentArticles = signal<any[]>([]);

    constructor() {
        this.blogs.set([
            {
                "title": "Exploring the Hidden Gems of Himachal Pradesh",
                "content": "From peaceful valleys to unexplored trails, discover the lesser-known destinations in Himachal that offer serenity and scenic beauty.",
                "commentCount": 21,
                "shareCount": 135,
                "date": "2024-09-18"
            },
            {
                "title": "Top 10 Nature Retreats in South India",
                "content": "Reconnect with nature at these breathtaking retreats spread across Kerala, Karnataka, and Tamil Nadu.",
                "commentCount": 17,
                "shareCount": 112,
                "date": "2024-12-02"
            },
            {
                "title": "A Road Trip Across the Leh-Ladakh Mountains",
                "content": "One of the most scenic and adventurous routes in India, Leh-Ladakh offers a blend of thrill and tranquility.",
                "commentCount": 39,
                "shareCount": 204,
                "date": "2024-08-25"
            },
            {
                "title": "Backpacking Through the Western Ghats",
                "content": "The Western Ghats are a biodiversity hotspot. Here’s everything you need to know about hiking and staying amidst this green wonder.",
                "commentCount": 26,
                "shareCount": 97,
                "date": "2025-01-06"
            },
            {
                "title": "A Beginner’s Guide to Wildlife Safaris in India",
                "content": "From Ranthambore to Kaziranga, explore the best national parks and what to expect during a safari.",
                "commentCount": 14,
                "shareCount": 66,
                "date": "2024-11-12"
            },
            {
                "title": "Monsoon Magic: Best Places to Visit During Rainy Season",
                "content": "Witness lush landscapes and vibrant waterfalls in India’s top monsoon destinations.",
                "commentCount": 11,
                "shareCount": 73,
                "date": "2025-06-21"
            },
            {
                "title": "Sustainable Travel Tips for Nature Lovers",
                "content": "Make your travel eco-friendly with these simple yet impactful sustainability practices.",
                "commentCount": 19,
                "shareCount": 89,
                "date": "2025-02-17"
            },
            {
                "title": "Top 5 Hill Stations to Cool Off This Summer",
                "content": "Escape the summer heat with a peaceful trip to these scenic hill stations across India.",
                "commentCount": 13,
                "shareCount": 78,
                "date": "2024-05-30"
            },
            {
                "title": "The Beauty of Andaman Islands: A Tropical Paradise",
                "content": "Explore the pristine beaches, coral reefs, and island culture of the Andaman and Nicobar Islands.",
                "commentCount": 24,
                "shareCount": 101,
                "date": "2025-03-28"
            },
            {
                "title": "Camping Under the Stars in Spiti Valley",
                "content": "Experience the raw Himalayan wilderness with high-altitude camping in Spiti Valley.",
                "commentCount": 16,
                "shareCount": 85,
                "date": "2024-10-11"
            },
            {
                "title": "A Nature Photographer’s Journey Through Sikkim",
                "content": "Capture the beauty of snow-capped peaks, alpine flowers, and rich culture while traveling through Sikkim.",
                "commentCount": 20,
                "shareCount": 94,
                "date": "2025-04-09"
            },
            {
                "title": "Trekking to the Valley of Flowers",
                "content": "A UNESCO World Heritage site, the Valley of Flowers is a must-visit for anyone seeking nature's finest colors.",
                "commentCount": 29,
                "shareCount": 143,
                "date": "2024-07-22"
            }
        ]);

        this.recentArticles.set([
            {
                "title": "The Secret Lives of Jungle Predators",
                "content": "Deep in the wilderness, animals like tigers, leopards, and hyenas live in a complex web of survival and strategy. This article explores how apex predators hunt, communicate, and thrive in their ecosystems.",
                "commentCount": 18,
                "shareCount": 102,
                "date": "2024-11-08",
                "tag": "Animal",
                "creator": "Rhea Verma"
            },
            {
                "title": "Why Trees Are Called the Lungs of the Earth",
                "content": "Trees and forests play a crucial role in producing oxygen and absorbing carbon dioxide. Discover how these natural oxygen factories are vital to maintaining life on our planet.",
                "commentCount": 25,
                "shareCount": 147,
                "date": "2025-01-19",
                "tag": "Nature",
                "creator": "Dr. Aditya Bose"
            },
            {
                "title": "Wildlife in the Himalayas: Adaptation and Survival",
                "content": "From snow leopards to Himalayan monals, wildlife in the Himalayas have evolved incredible adaptations to survive extreme conditions. Let’s explore the unique biodiversity of this majestic mountain range.",
                "commentCount": 12,
                "shareCount": 83,
                "date": "2025-04-03",
                "tag": "Animal",
                "creator": "Mehul Singh"
            }
        ]);
    }
}
