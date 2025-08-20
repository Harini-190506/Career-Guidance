@@ .. @@
           <div className="text-center mb-8">
             <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3C415C" }}>
-              <Brain className="w-8 h-8" style={{ color: "#B4A5A5" }} />
+              <Brain className="w-8 h-8 text-white" />
             </div>
-            <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
+            <h1 className="text-4xl font-bold mb-3 text-white">
               Join CareerSync AI
             </h1>
-            <p className="opacity-80">Start your personalized career journey today</p>
+            <p className="text-gray-300 text-lg">Start your personalized career journey today</p>
             
             {/* Progress indicator */}
             <div className="flex justify-center mt-6 space-x-2">
               {[1, 2, 3].map((step) => (
                 <div
                   key={step}
-                  className={`w-3 h-3 rounded-full ${
-                    step <= currentStep ? 'bg-blue-500' : 'bg-gray-600'
+                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
+                    step <= currentStep ? 'bg-purple-500 scale-110' : 'bg-gray-600'
                   }`}
                 />
               ))}
             </div>
-            <p className="text-sm mt-2 opacity-70">
+            <p className="text-sm mt-3 text-gray-400 font-medium">
               Step {currentStep} of 3: {
                 currentStep === 1 ? 'Basic Information' :
                 currentStep === 2 ? 'Personality Assessment' :
@@ -89,15 +89,15 @@ export default function SignUpPage() {
           </div>

-          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+          <Card className="border-white/10 backdrop-blur-md bg-white/5 professional-shadow-lg">
             <CardHeader>
-              <CardTitle style={{ color: "#B4A5A5" }}>
+              <CardTitle className="text-white text-xl">
                 {currentStep === 1 ? 'Create Account' :
                  currentStep === 2 ? 'Personality Assessment' :
                  'Aptitude Assessment'}
               </CardTitle>
-              <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
+              <CardDescription className="text-gray-300">
                 {currentStep === 1 ? 'Enter your basic information to get started' :
                  currentStep === 2 ? 'Help us understand your personality traits' :
                  'Assess your skills and aptitudes for better career matching'}
@@ .. @@
                 {errors.submit && (
-                  <div className="p-3 rounded-lg border border-red-500/20 bg-red-900/10 mt-4">
+                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 backdrop-blur-sm mt-4">
                     <div className="flex items-center space-x-2">
                       <AlertCircle className="w-4 h-4 text-red-400" />
-                      <p className="text-sm text-red-400">{errors.submit}</p>
+                      <p className="text-sm text-red-300 font-medium">{errors.submit}</p>
                     </div>
                   </div>
                 )}
@@ .. @@
           <div className="text-center mt-6">
-            <p className="text-sm opacity-80">
+            <p className="text-sm text-gray-300">
               Already have an account?{" "}
-              <Link href="/signin" className="text-blue-400 hover:text-blue-300 font-medium">
+              <Link href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                 Sign in here
               </Link>
             </p>
@@ .. @@
       <div className="space-y-2">
-        <Label style={{ color: "#B4A5A5" }}>Full Name</Label>
+        <Label className="text-white font-medium">Full Name</Label>
         <div className="relative">
-          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
+          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
           <Input
             id="name"
             placeholder="John Doe"
             value={formData.name}
             onChange={(e) => handleInputChange("name", e.target.value)}
-            className="pl-10 border-gray-600"
-            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
+            className="pl-10 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
           />
         </div>
       </div>

       <div className="space-y-2">
-        <Label htmlFor="email" style={{ color: "#B4A5A5" }}>Email Address</Label>
+        <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
         <div className="relative">
-          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
+          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
           <Input
             id="email"
             type="email"
             placeholder="john@example.com"
             value={formData.email}
             onChange={(e) => handleInputChange("email", e.target.value)}
-            className="pl-10 border-gray-600"
-            style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
+            className="pl-10 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
           />
         </div>
       </div>

       <div className="space-y-2">
-         <Label htmlFor="password" style={{ color: "#B4A5A5" }}>Password</Label>
+         <Label htmlFor="password" className="text-white font-medium">Password</Label>
          <div className="relative">
-           <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
+           <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
-             className="pl-10 pr-10 border-gray-600"
-             style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
+             className="pl-10 pr-10 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
-             className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100"
+             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
@@ .. @@
       <Button
         type="button"
         onClick={nextStep}
-        className="w-full text-white font-semibold"
-        style={{ backgroundColor: "#3C415C" }}
+        className="w-full text-white font-semibold gradient-bg-primary professional-shadow-lg hover:scale-[1.02] transition-all duration-300"
       >
         Next: Personality Assessment
         <ArrowRight className="w-4 h-4 ml-2" />
@@ .. @@
   const renderStep2 = () => (
     <div className="space-y-6">
       <div className="text-center mb-6">
-        <Heart className="w-8 h-8 mx-auto mb-2 text-pink-400" />
-        <h3 className="text-xl font-semibold" style={{ color: "#B4A5A5" }}>Personality Assessment</h3>
-        <p className="text-sm opacity-70">Rate yourself on these personality traits (1-10)</p>
+        <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg-secondary flex items-center justify-center">
+          <Heart className="w-6 h-6 text-white" />
+        </div>
+        <h3 className="text-2xl font-semibold text-white mb-2">Personality Assessment</h3>
+        <p className="text-gray-300">Rate yourself on these personality traits (1-10)</p>
       </div>

       <div className="space-y-4">
         <div className="space-y-2">
-          <Label style={{ color: "#B4A5A5" }}>Openness to Experience: {formData.o_score}</Label>
+          <Label className="text-white font-medium">Openness to Experience: {formData.o_score}</Label>
           <Slider
             value={[formData.o_score]}
             onValueChange={(value) => handleInputChange("o_score", value[0])}
@@ -318,7 +330,7 @@ export default function SignUpPage() {
             step={1}
             className="w-full"
           />
-          <p className="text-xs opacity-60">How open are you to new experiences and ideas?</p>
+          <p className="text-xs text-gray-400">How open are you to new experiences and ideas?</p>
         </div>
@@ .. @@
         <Button
           type="button"
           onClick={prevStep}
           variant="outline"
-          className="flex-1 border-gray-600 text-gray-300"
+          className="flex-1 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
         >
           <ArrowLeft className="w-4 h-4 mr-2" />
           Back
@@ -386,8 +398,7 @@ export default function SignUpPage() {
         <Button
           type="button"
           onClick={nextStep}
-          className="flex-1 text-white font-semibold"
-          style={{ backgroundColor: "#3C415C" }}
+          className="flex-1 text-white font-semibold gradient-bg-primary professional-shadow-lg hover:scale-[1.02] transition-all duration-300"
         >
           Next: Aptitude Assessment
           <ArrowRight className="w-4 h-4 ml-2" />
@@ .. @@
   const renderStep3 = () => (
     <div className="space-y-6">
       <div className="text-center mb-6">
-        <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
-        <h3 className="text-xl font-semibold" style={{ color: "#B4A5A5" }}>Aptitude Assessment</h3>
-        <p className="text-sm opacity-70">Rate your skills in these areas (1-10)</p>
+        <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg-success flex items-center justify-center">
+          <Zap className="w-6 h-6 text-white" />
+        </div>
+        <h3 className="text-2xl font-semibold text-white mb-2">Aptitude Assessment</h3>
+        <p className="text-gray-300">Rate your skills in these areas (1-10)</p>
       </div>
@@ .. @@
         <Button
           type="button"
           onClick={prevStep}
           variant="outline"
-          className="flex-1 border-gray-600 text-gray-300"
+          className="flex-1 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
         >
           <ArrowLeft className="w-4 h-4 mr-2" />
           Back
@@ -485,8 +496,7 @@ export default function SignUpPage() {
         <Button
           type="submit"
           disabled={isLoading}
-          className="flex-1 text-white font-semibold"
-          style={{ backgroundColor: "#3C415C" }}
+          className="flex-1 text-white font-semibold gradient-bg-primary professional-shadow-lg hover:scale-[1.02] transition-all duration-300"
         >
           {isLoading ? (
             <div className="flex items-center space-x-2">