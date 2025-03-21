"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import RestaurantCard from "../../components/restaurant-card";

// Sample restaurant data
const restaurants = [
    {
        id: 1,
        name: "The Rustic Table",
        address: "123 Main St, Anytown, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
        cuisine: "American",
    },
    {
        id: 2,
        name: "Sakura Sushi",
        address: "456 Oak Ave, Somewhere, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
        cuisine: "Japanese",
    },
    {
        id: 3,
        name: "Pasta Paradise",
        address: "789 Elm Blvd, Nowhere, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.2,
        cuisine: "Italian",
    },
    {
        id: 4,
        name: "Spice Garden",
        address: "101 Pine St, Elsewhere, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.6,
        cuisine: "Indian",
    },
    {
        id: 5,
        name: "Taco Fiesta",
        address: "202 Cedar Rd, Anywhere, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.3,
        cuisine: "Mexican",
    },
    {
        id: 6,
        name: "Le Petit Bistro",
        address: "303 Maple Dr, Someplace, USA",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
        cuisine: "French",
    },
];

const CustomerDashboard = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRestaurants = restaurants.filter(
        (restaurant) =>
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.cuisine
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            restaurant.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectRestaurant = (id) => {
        setSelectedRestaurant(id);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-2">Customer Dashboard</h1>
            <p className="text-muted-foreground mb-6">
                Discover and select from our curated list of restaurants
            </p>

            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                    type="text"
                    placeholder="Search by name, cuisine, or location..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        isSelected={selectedRestaurant === restaurant.id}
                        onSelect={handleSelectRestaurant}
                    />
                ))}
            </div>

            {filteredRestaurants.length === 0 && (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium">
                        No restaurants found
                    </h3>
                    <p className="text-muted-foreground">
                        Try adjusting your search criteria
                    </p>
                </div>
            )}
        </div>
    );
};

export default CustomerDashboard;