@@ .. @@
       {/* Hero Section */}
-      <section className="relative py-20 px-4">
+      <section className="relative py-24 px-4 overflow-hidden">
         <div className="container mx-auto text-center">
           <div className="max-w-4xl mx-auto">
             <Badge
               variant="outline"
-              className="mb-6 px-4 py-2 text-sm border-purple-500 text-purple-300"
-              style={{ backgroundColor: "#301B3F" }}
+              className="mb-8 px-6 py-3 text-sm font-medium border-purple-500/50 text-purple-300 backdrop-blur-sm animate-fade-in-up"
+              style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
             >
               🚀 Powered by Advanced Machine Learning
             </Badge>

-            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
+            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
               <span className="gradient-text">Find Your Perfect</span>
               <br />
-              <span style={{ color: "#B4A5A5" }}>Career Path</span>
+              <span className="text-white">Career Path</span>
             </h1>

-            <p className="text-xl md:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
+            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
               Let AI analyze your skills, interests, and goals to recommend the ideal career path with a personalized
               roadmap for success.
             </p>

-            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
+            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up">
               <Link href="/signup">
                 <Button
                   size="lg"
-                  className="px-8 py-4 text-lg font-semibold text-white career-button"
-                  style={{ backgroundColor: "#3C415C" }}
+                  className="px-10 py-5 text-lg font-semibold text-white professional-shadow-lg hover:scale-105 transition-all duration-300 gradient-bg-primary"
                 >
                   Get Started Free
                   <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </Link>
               <Link href="/signin">
                 <Button
                   variant="outline"
                   size="lg"
-                  className="px-8 py-4 text-lg font-semibold border-gray-600 bg-transparent"
-                  style={{ color: "#B4A5A5" }}
+                  className="px-10 py-5 text-lg font-semibold border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
                 >
                   Sign In
                 </Button>
               </Link>
             </div>
           </div>
         </div>

         {/* Background decoration */}
-        <div className="absolute inset-0 overflow-hidden pointer-events-none">
+        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
           <div
-            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
-            style={{ backgroundColor: "#3C415C" }}
+            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
+            style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
           />
           <div
-            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
-            style={{ backgroundColor: "#301B3F" }}
+            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse"
+            style={{ background: "linear-gradient(135deg, #10B981, #F59E0B)" }}
           />
         </div>
       </section>