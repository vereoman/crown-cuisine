"use client";
import { useState } from "react";
import { Plus, Minus, ChefHat, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MenuCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToOrder = (e) => {
    e.stopPropagation();
    console.log(`Added ${quantity} of ${item.name} to order`);
  };

  const incrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const renderSpicyIndicator = () => {
    if (!item.spicyLevel) return null;

    const level = item.spicyLevel.toLowerCase();
    const spicyColors = {
      mild: "text-yellow-500",
      medium: "text-orange-500",
      hot: "text-red-500",
      "extra hot": "text-red-600",
    };

    const color = spicyColors[level] || "text-red-500";

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1">
              <Flame className={`h-4 w-4 ${color}`} />
              <span className="text-xs font-medium">{item.spicyLevel}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Spice level: {item.spicyLevel}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={() => console.log(`Selected ${item.name}`)}
    >
      <div className="h-48 w-full relative">
        {item.image && (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {item.dietary && 
                item.dietary.map((diet, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-black/70 text-white backdrop-blur-sm"
                  >
                    {diet}
                  </Badge>
                ))
              }
            </div>
            <div className="absolute top-2 left-2">
              <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded text-sm font-medium backdrop-blur-sm">
                ${item.price.toFixed(2)}
              </div>
            </div>
          </>
        )}
      </div>
      <CardContent className="pt-4 pb-2">
        <div className="flex items-center mb-1 justify-between">
          <h2 className="text-xl font-semibold line-clamp-1 mr-2">
            {item.name}
          </h2>
          {renderSpicyIndicator()}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {item.description}
        </p>
        {item.isChefSpecial && (
          <div className="flex items-center gap-2 mt-2">
            <ChefHat className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Chef's special</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-muted/20 px-6 py-3 mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-r-none"
              onClick={decrementQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-l-none"
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button
            className="cursor-pointer font-medium transition-all duration-300 hover:bg-primary/90"
            onClick={handleAddToOrder}
          >
            Add to Order
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;