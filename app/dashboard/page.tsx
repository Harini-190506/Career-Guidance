@@ .. @@
   if (loading) {
     return (
-      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
+      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
         <div className="text-center">
-          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
-          <p>Loading your dashboard...</p>
+          <div className="w-12 h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
+          <p className="text-white text-lg font-medium">Loading your dashboard...</p>
         </div>
       </div>
     )
   }

   return (
-    <div className="min-h-screen" style={{ backgroundColor: "#151515", color: "#B4A5A5" }}>
+    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
       <Navbar />

       <div className="container mx-auto px-4 py-8">
         {/* Welcome Header */}
-        <div className="mb-8">
+        <div className="mb-12 animate-fade-in-up">
           <div className="flex items-center justify-between">
             <div>
-              <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
+              <h1 className="text-4xl font-bold mb-3 text-white">
                 Welcome back, {currentUser.name}! 👋
               </h1>
-              <p className="opacity-80">Continue your career journey with personalized AI recommendations</p>
+              <p className="text-gray-300 text-lg">Continue your career journey with personalized AI recommendations</p>
             </div>
             <div className="flex items-center space-x-4">
-              <Badge variant="outline" className="border-green-500 text-green-300">
+              <Badge variant="outline" className="border-green-500/50 text-green-300 bg-green-500/10 backdrop-blur-sm px-3 py-1">
                 <Bell className="w-3 h-3 mr-1" />3 New Insights
               </Badge>
               <div className="text-right">
-                <p className="text-sm font-medium">{currentTime.toLocaleDateString()}</p>
-                <p className="text-xs opacity-70">{currentTime.toLocaleTimeString()}</p>
+                <p className="text-sm font-medium text-white">{currentTime.toLocaleDateString()}</p>
+                <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString()}</p>
               </div>
             </div>
           </div>
@@ .. @@
         {/* Quick Stats Overview */}
-        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
-          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-in-right">
+          <Card className="border-white/10 backdrop-blur-md bg-white/5 professional-shadow-lg hover:scale-105 transition-all duration-300">
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
-              <CardTitle className="text-sm font-medium" style={{ color: "#B4A5A5" }}>
+              <CardTitle className="text-sm font-medium text-white">
                 Career Progress
               </CardTitle>
-              <Target className="h-4 w-4" style={{ color: "#3C415C" }} />
+              <div className="p-2 rounded-lg bg-blue-500/20">
+                <Target className="h-4 w-4 text-blue-400" />
+              </div>
             </CardHeader>
             <CardContent>
-              <div className="text-2xl font-bold text-blue-400">{currentUser.progressScore}%</div>
-              <p className="text-xs opacity-70 mb-2">Overall completion</p>
+              <div className="text-3xl font-bold text-blue-400 mb-2">{currentUser.progressScore}%</div>
+              <p className="text-xs text-gray-400 mb-3">Overall completion</p>
               <Progress value={currentUser.progressScore} className="h-2" />
             </CardContent>
           </Card>
@@ .. @@
         {/* Main Content Tabs */}
-        <Tabs defaultValue="overview" className="space-y-6">
+        <Tabs defaultValue="overview" className="space-y-8">
           <TabsList
-            className="grid w-full grid-cols-2 lg:grid-cols-6 border border-gray-700"
-            style={{ backgroundColor: "#301B3F" }}
+            className="grid w-full grid-cols-2 lg:grid-cols-6 border border-white/10 bg-white/5 backdrop-blur-md professional-shadow"
           >
             <TabsTrigger
               value="overview"
-              className="data-[state=active]:text-white"
-              style={{ "data-[state=active]": { backgroundColor: "#3C415C" } }}
+              className="data-[state=active]:text-white data-[state=active]:bg-purple-600 transition-all duration-300"
             >
               Overview
             </TabsTrigger>
@@ .. @@
           <TabsContent value="overview" className="space-y-6">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Latest ML Predictions */}
-              <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+              <Card className="border-white/10 backdrop-blur-md bg-white/5 professional-shadow-lg">
                 <CardHeader>
                   <CardTitle className="flex items-center space-x-2">
                     <Brain className="w-5 h-5 text-purple-400" />
-                    <span style={{ color: "#B4A5A5" }}>Latest AI Predictions</span>
+                    <span className="text-white">Latest AI Predictions</span>
                   </CardTitle>
-                  <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
+                  <CardDescription className="text-gray-300">
                     Your top career matches based on AI analysis
                   </CardDescription>
                 </CardHeader>
@@ .. @@
                   {recentPredictions.map((prediction, index) => (
                     <div
                       key={index}
-                      className="p-4 rounded-lg border border-gray-600"
-                      style={{ backgroundColor: "#151515" }}
+                      className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                     >
                       <div className="flex justify-between items-start mb-2">
-                        <h4 className="font-medium" style={{ color: "#B4A5A5" }}>
+                        <h4 className="font-medium text-white">
                           {prediction.career}
                         </h4>
-                        <Badge variant="outline" className={prediction.color}>
+                        <Badge variant="outline" className={`${prediction.color} border-current/30 bg-current/10`}>
                           {prediction.confidence}% Match
                         </Badge>
                       </div>
                       <div className="space-y-2">
                         <div className="flex justify-between text-sm">
-                          <span style={{ color: "#B4A5A5", opacity: 0.7 }}>Confidence Level</span>
+                          <span className="text-gray-400">Confidence Level</span>
                           <span className={prediction.color}>{prediction.match}</span>
                         </div>
                         <Progress value={prediction.confidence} className="h-2" />
                       </div>
                     </div>
                   ))}
-                  <Button className="w-full text-white" style={{ backgroundColor: "#3C415C" }}>
+                  <Button className="w-full text-white gradient-bg-primary professional-shadow hover:scale-[1.02] transition-all duration-300">
                     <ArrowRight className="w-4 h-4 mr-2" />
                     View Detailed Predictions
                   </Button>
@@ .. @@
               {/* Quick Actions */}
-              <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+              <Card className="border-white/10 backdrop-blur-md bg-white/5 professional-shadow-lg">
                 <CardHeader>
                   <CardTitle className="flex items-center space-x-2">
                     <Zap className="w-5 h-5 text-yellow-400" />
-                    <span style={{ color: "#B4A5A5" }}>Quick Actions</span>
+                    <span className="text-white">Quick Actions</span>
                   </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
-                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
+                  <Button className="w-full justify-between text-white gradient-bg-primary professional-shadow hover:scale-[1.02] transition-all duration-300">
                     <span>Take Career Assessment</span>
                     <ArrowRight className="w-4 h-4" />
                   </Button>

-                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
+                  <Button className="w-full justify-between text-white gradient-bg-primary professional-shadow hover:scale-[1.02] transition-all duration-300">
                     <span>View Learning Roadmap</span>
                     <ArrowRight className="w-4 h-4" />
                   </Button>

-                  <Button className="w-full justify-between text-white" style={{ backgroundColor: "#3C415C" }}>
+                  <Button className="w-full justify-between text-white gradient-bg-primary professional-shadow hover:scale-[1.02] transition-all duration-300">
                     <span>Generate Progress Report</span>
                     <ArrowRight className="w-4 h-4" />
                   </Button>

-                  <div className="pt-4 border-t border-gray-600">
+                  <div className="pt-4 border-t border-white/20">
                     <div className="flex items-center justify-between mb-2">
-                      <span className="text-sm" style={{ color: "#B4A5A5", opacity: 0.7 }}>
+                      <span className="text-sm text-gray-400">
                         Profile Completion
                       </span>
                       <span className="text-sm font-medium text-green-400">{currentUser.progressScore}%</span>
@@ .. @@
             {/* AI Insights */}
-            <Card className="border-purple-500/30 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+            <Card className="border-purple-500/30 backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-blue-500/10 professional-shadow-lg">
               <CardHeader>
                 <CardTitle className="flex items-center space-x-2">
                   <Brain className="w-5 h-5 text-purple-400" />
-                  <span style={{ color: "#B4A5A5" }}>AI Career Insights</span>
+                  <span className="text-white">AI Career Insights</span>
                 </CardTitle>
-                <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
+                <CardDescription className="text-gray-300">
                   Personalized recommendations based on your profile analysis
                 </CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
-                  <div className="p-4 rounded-lg border border-green-500/20" style={{ backgroundColor: "#151515" }}>
+                  <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                     <p className="text-sm text-green-300">
                       🎯 <strong>Strong Match:</strong> Your analytical skills and math scores indicate excellent
                       potential for Data Science careers. Consider exploring machine learning specializations.
                     </p>
                   </div>
-                  <div className="p-4 rounded-lg border border-blue-500/20" style={{ backgroundColor: "#151515" }}>
+                  <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                     <p className="text-sm text-blue-300">
                       💡 <strong>Skill Gap:</strong> To strengthen your Software Engineering profile, consider taking
                       courses in system design and cloud computing.
                     </p>
                   </div>
-                  <div className="p-4 rounded-lg border border-yellow-500/20" style={{ backgroundColor: "#151515" }}>
+                  <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
                     <p className="text-sm text-yellow-300">
                       📈 <strong>Growth Opportunity:</strong> Your leadership scores suggest Product Management
                       potential. Gain experience in project coordination and user research.