"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RestaurantCard = ({ restaurant, onSelect }) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={() => onSelect(restaurant.id)}
    >
      <div className="h-48 w-full relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="absolute inset-0 w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded text-sm font-medium backdrop-blur-sm">
            ★ {restaurant.rating}
          </div>
        </div>
      </div>
      <CardContent className="pt-4 pb-2">
        <div className="flex items-center mb-1">
          <h2 className="text-xl font-semibold line-clamp-1 mr-2">
            {restaurant.name}
          </h2>
          <Badge variant="secondary" className="font-medium">
            {restaurant.cuisine}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {restaurant.address}
        </p>
      </CardContent>
      <CardFooter className="bg-muted/20 px-6 py-3 mt-auto">
        <Button
          className="w-full cursor-pointer font-medium transition-all duration-300 hover:bg-primary/90"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/restaurant/${restaurant.id}`);
          }}
        >
          Select Restaurant
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
