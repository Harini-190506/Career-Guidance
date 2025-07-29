"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Plus, Clock } from "lucide-react"

interface Meal {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  time: string
  type: "breakfast" | "lunch" | "dinner" | "snack"
}

interface MealTrackerProps {
  onCaloriesUpdate: (calories: number) => void
}

export function MealTracker({ onCaloriesUpdate }: MealTrackerProps) {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: "1",
      name: "Oatmeal with Berries",
      calories: 320,
      protein: 12,
      carbs: 54,
      fat: 8,
      time: "08:30",
      type: "breakfast",
    },
    {
      id: "2",
      name: "Grilled Chicken Salad",
      calories: 450,
      protein: 35,
      carbs: 20,
      fat: 25,
      time: "12:45",
      type: "lunch",
    },
    {
      id: "3",
      name: "Greek Yogurt",
      calories: 150,
      protein: 15,
      carbs: 12,
      fat: 5,
      time: "15:30",
      type: "snack",
    },
    {
      id: "4",
      name: "Salmon with Quinoa",
      calories: 530,
      protein: 40,
      carbs: 45,
      fat: 22,
      time: "19:15",
      type: "dinner",
    },
  ])

  const [newMeal, setNewMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0)
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0)
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0)

  const addMeal = (type: "breakfast" | "lunch" | "dinner" | "snack") => {
    if (newMeal.name && newMeal.calories) {
      const meal: Meal = {
        id: Date.now().toString(),
        name: newMeal.name,
        calories: Number.parseInt(newMeal.calories),
        protein: Number.parseInt(newMeal.protein) || 0,
        carbs: Number.parseInt(newMeal.carbs) || 0,
        fat: Number.parseInt(newMeal.fat) || 0,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        type,
      }

      const updatedMeals = [...meals, meal]
      setMeals(updatedMeals)
      onCaloriesUpdate(updatedMeals.reduce((sum, m) => sum + m.calories, 0))

      setNewMeal({ name: "", calories: "", protein: "", carbs: "", fat: "" })
    }
  }

  const getMealsByType = (type: string) => meals.filter((meal) => meal.type === type)

  const MealCard = ({ meal }: { meal: Meal }) => (
    <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-100">{meal.name}</h4>
        <Badge variant="outline" className="text-xs">
          <Clock className="w-3 h-3 mr-1" />
          {meal.time}
        </Badge>
      </div>
      <div className="grid grid-cols-4 gap-2 text-xs text-gray-300">
        <div>
          <span className="text-orange-400 font-medium">{meal.calories}</span>
          <p>kcal</p>
        </div>
        <div>
          <span className="text-red-400 font-medium">{meal.protein}g</span>
          <p>protein</p>
        </div>
        <div>
          <span className="text-yellow-400 font-medium">{meal.carbs}g</span>
          <p>carbs</p>
        </div>
        <div>
          <span className="text-green-400 font-medium">{meal.fat}g</span>
          <p>fat</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Nutrition Summary */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Utensils className="w-5 h-5 text-orange-400" />
            <span>Daily Nutrition Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-orange-900/20 rounded-lg border border-orange-500/20">
              <div className="text-2xl font-bold text-orange-400">{totalCalories}</div>
              <p className="text-sm text-gray-300">Total Calories</p>
            </div>
            <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-500/20">
              <div className="text-2xl font-bold text-red-400">{totalProtein}g</div>
              <p className="text-sm text-gray-300">Protein</p>
            </div>
            <div className="text-center p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
              <div className="text-2xl font-bold text-yellow-400">{totalCarbs}g</div>
              <p className="text-sm text-gray-300">Carbs</p>
            </div>
            <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">{totalFat}g</div>
              <p className="text-sm text-gray-300">Fat</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Tabs */}
      <Tabs defaultValue="breakfast" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700">
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="snack">Snacks</TabsTrigger>
        </TabsList>

        {(["breakfast", "lunch", "dinner", "snack"] as const).map((mealType) => (
          <TabsContent key={mealType} value={mealType}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="capitalize">{mealType}</CardTitle>
                <CardDescription>Track your {mealType} and monitor nutrition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Existing meals */}
                <div className="space-y-3">
                  {getMealsByType(mealType).map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                  ))}
                </div>

                {/* Add new meal form */}
                <div className="p-4 bg-gray-700/20 rounded-lg border border-gray-600 space-y-4">
                  <h4 className="font-medium text-gray-100">Add New {mealType}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="meal-name">Meal Name</Label>
                      <Input
                        id="meal-name"
                        placeholder="e.g., Grilled Chicken"
                        value={newMeal.name}
                        onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
                        className="bg-gray-800 border-gray-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="calories">Calories</Label>
                      <Input
                        id="calories"
                        type="number"
                        placeholder="320"
                        value={newMeal.calories}
                        onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                        className="bg-gray-800 border-gray-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="protein">Protein (g)</Label>
                      <Input
                        id="protein"
                        type="number"
                        placeholder="25"
                        value={newMeal.protein}
                        onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
                        className="bg-gray-800 border-gray-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="carbs">Carbs (g)</Label>
                      <Input
                        id="carbs"
                        type="number"
                        placeholder="30"
                        value={newMeal.carbs}
                        onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
                        className="bg-gray-800 border-gray-600"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => addMeal(mealType)}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={!newMeal.name || !newMeal.calories}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add {mealType}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
