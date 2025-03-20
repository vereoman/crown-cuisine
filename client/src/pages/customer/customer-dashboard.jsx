"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Sample restaurant data
const restaurants = [
    {
        id: 1,
        name: "The Rustic Table",
        address: "123 Main St, Anytown, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.5,
        cuisine: "American",
        priceRange: "$$",
    },
    {
        id: 2,
        name: "Sakura Sushi",
        address: "456 Oak Ave, Somewhere, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.7,
        cuisine: "Japanese",
        priceRange: "$$$",
    },
    {
        id: 3,
        name: "Pasta Paradise",
        address: "789 Elm Blvd, Nowhere, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.2,
        cuisine: "Italian",
        priceRange: "$$",
    },
    {
        id: 4,
        name: "Spice Garden",
        address: "101 Pine St, Elsewhere, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.6,
        cuisine: "Indian",
        priceRange: "$$",
    },
    {
        id: 5,
        name: "Taco Fiesta",
        address: "202 Cedar Rd, Anywhere, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.3,
        cuisine: "Mexican",
        priceRange: "$",
    },
    {
        id: 6,
        name: "Le Petit Bistro",
        address: "303 Maple Dr, Someplace, USA",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        cuisine: "French",
        priceRange: "$$$$",
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
                    <Card
                        key={restaurant.id}
                        className={`overflow-hidden transition-all hover:shadow-md ${
                            selectedRestaurant === restaurant.id
                                ? "ring-2 ring-primary"
                                : ""
                        }`}
                        onClick={() => setSelectedRestaurant(restaurant.id)}
                    >
                        <div className="aspect-video relative">
                            <img
                                // Replace the placeholder with a random nature image from Unsplash.
                                src={`https://source.unsplash.com/random/300x200/?nature&sig=${restaurant.id}`}
                                alt={restaurant.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <CardContent className="pt-4">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-xl font-semibold">
                                    {restaurant.name}
                                </h2>
                                <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                                    ★ {restaurant.rating}
                                </div>
                            </div>
                            <Badge className="mb-2">{restaurant.cuisine}</Badge>
                            <p className="text-muted-foreground text-sm mt-2">
                                {restaurant.address}
                            </p>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/20 px-6 py-3">
                            <Button
                                variant={
                                    selectedRestaurant === restaurant.id
                                        ? "default"
                                        : "outline"
                                }
                                className="w-full cursor-pointer"
                                onClick={() =>
                                    setSelectedRestaurant(restaurant.id)
                                }
                            >
                                {selectedRestaurant === restaurant.id
                                    ? "Selected"
                                    : "Select Restaurant"}
                            </Button>
                        </CardFooter>
                    </Card>
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
