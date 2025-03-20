import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    CalendarCheck,
    Utensils,
    CreditCard,
    MenuSquare,
    Warehouse,
    UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Hero Section */}
            <section className="flex items-center justify-center text-center px-6 py-16">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                        Streamline Your Restaurant
                        <br />
                        Management Experience
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        A comprehensive platform designed to empower restaurant
                        owners and delight customers with seamless, innovative
                        solutions.
                    </p>
                    <div className="flex justify-center gap-4 mb-16">
                        <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 flex items-center cursor-pointer"
                            variant="default"
                            onClick={() => navigate("/auth/signup")}
                        >
                            Get Started
                        </Button>
                        <Button
                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-6 cursor-pointer"
                            variant="secondary"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Customer Features */}
                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <CalendarCheck
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Easy Table Booking
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Reserve your favorite table with just a few
                                clicks. View real-time availability and make
                                instant reservations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <Utensils
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Convenient Menu Ordering
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Browse menus, customize orders, and place
                                seamless takeout from your favorite restaurants.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <CreditCard
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Secure Payments
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Experience hassle-free, secure transactions with
                                multiple payment options and advanced
                                encryption.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Owner Features */}
                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <MenuSquare
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Dynamic Menu Management
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Easily update menus, add specials, manage
                                pricing, and showcase your culinary offerings in
                                real-time.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <Warehouse
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Inventory Tracking
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Monitor stock levels, track ingredient usage,
                                and receive automated restocking alerts.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center bg-card">
                        <CardHeader className="flex flex-col items-center">
                            <UserCheck
                                className="w-8 h-8 text-primary mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle className="text-foreground">
                                Staff Scheduling
                            </CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Simplify workforce management with intuitive
                                scheduling, shift tracking, and performance
                                insights.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
