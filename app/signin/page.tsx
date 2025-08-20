@@ .. @@
         <div className="w-full max-w-md">
           {/* Header */}
           <div className="text-center mb-8">
             <div
-              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
-              style={{ backgroundColor: "#3C415C" }}
+              className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center gradient-bg-primary professional-shadow-lg"
             >
-              <Brain className="w-8 h-8" style={{ color: "#B4A5A5" }} />
+              <Brain className="w-8 h-8 text-white" />
             </div>
-            <h1 className="text-3xl font-bold mb-2" style={{ color: "#B4A5A5" }}>
+            <h1 className="text-4xl font-bold mb-3 text-white">
               Welcome Back
             </h1>
-            <p className="opacity-80">Sign in to continue your career journey</p>
+            <p className="text-gray-300 text-lg">Sign in to continue your career journey</p>
           </div>

           {/* Sign In Form */}
-          <Card className="border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+          <Card className="border-white/10 backdrop-blur-md bg-white/5 professional-shadow-lg">
             <CardHeader>
-              <CardTitle style={{ color: "#B4A5A5" }}>Sign In</CardTitle>
-              <CardDescription style={{ color: "#B4A5A5", opacity: 0.7 }}>
+              <CardTitle className="text-white text-xl">Sign In to Your Account</CardTitle>
+              <CardDescription className="text-gray-300">
                 Enter your credentials to access your account
               </CardDescription>
             </CardHeader>
@@ .. @@
                 {/* Error Message */}
                 {error && (
)
}
-                  <div className="p-3 rounded-lg border border-red-500/20 bg-red-900/10">
+                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 backdrop-blur-sm">
                     <div className="flex items-center space-x-2">
                       <AlertCircle className="w-4 h-4 text-red-400" />
-                      <p className="text-sm text-red-400">{error}</p>
+                      <p className="text-sm text-red-300 font-medium">{error}</p>
                     </div>
                   </div>
                 )}

                 {/* Email Field */}
                 <div className="space-y-2">
-                  <Label htmlFor="email" style={{ color: "#B4A5A5" }}>
+                  <Label htmlFor="email" className="text-white font-medium">
                     Email Address
                   </Label>
                   <div className="relative">
-                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
+                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <Input
                       id="email"
                       type="email"
                       placeholder="Enter your email"
                       value={formData.email}
                       onChange={(e) => handleInputChange("email", e.target.value)}
-                      className="pl-10 border-gray-600"
-                      style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
+                      className="pl-10 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
                       required
                     />
                   </div>
@@ .. @@
                 {/* Password Field */}
                 <div className="space-y-2">
-                  <Label htmlFor="password" style={{ color: "#B4A5A5" }}>
+                  <Label htmlFor="password" className="text-white font-medium">
                     Password
                   </Label>
                   <div className="relative">
-                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
+                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <Input
                       id="password"
                       type={showPassword ? "text" : "password"}
                       placeholder="Enter your password"
                       value={formData.password}
                       onChange={(e) => handleInputChange("password", e.target.value)}
-                      className="pl-10 pr-10 border-gray-600"
-                      style={{ backgroundColor: "#151515", color: "#B4A5A5" }}
+                      className="pl-10 pr-10 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
                       required
                     />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
-                      className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100"
+                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                     >
                       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                     </button>
@@ .. @@
                     <Label htmlFor="remember" className="text-sm" style={{ color: "#B4A5A5" }}>
                       Remember me
                     </Label>
                   </div>
-                  <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
+                  <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                     Forgot password?
                   </Link>
                 </div>

                 {/* Submit Button */}
                 <Button
                   type="submit"
                   disabled={isLoading}
-                  className="w-full text-white font-semibold"
-                  style={{ backgroundColor: "#3C415C" }}
+                  className="w-full text-white font-semibold gradient-bg-primary professional-shadow-lg hover:scale-[1.02] transition-all duration-300"
                 >
                   {isLoading ? (
                     <div className="flex items-center space-x-2">
@@ .. @@
                 {/* Divider */}
                 <div className="relative">
                   <div className="absolute inset-0 flex items-center">
-                    <div className="w-full border-t border-gray-600" />
+                    <div className="w-full border-t border-white/20" />
                   </div>
                   <div className="relative flex justify-center text-sm">
-                    <span className="px-2 opacity-70" style={{ backgroundColor: "#301B3F" }}>
+                    <span className="px-4 text-gray-400 bg-black/50 backdrop-blur-sm rounded-full">
                       Or continue with
                     </span>
                   </div>
@@ .. @@
                 <div className="grid grid-cols-2 gap-3">
                   <Button
                     type="button"
                     variant="outline"
                 )
                 }
-                    className="border-gray-600 bg-transparent"
-                    style={{ color: "#B4A5A5" }}
+                    className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
                   >
                     <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
@@ .. @@
                   <Button
                     type="button"
                     variant="outline"
-                    className="border-gray-600 bg-transparent"
-                    style={{ color: "#B4A5A5" }}
+                    className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
                   >
                     <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
@@ .. @@
           {/* Sign Up Link */}
           <div className="text-center mt-6">
-            <p className="text-sm opacity-80">
+            <p className="text-sm text-gray-300">
               Don't have an account?{" "}
-              <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
+              <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                 Sign up for free
               </Link>
             </p>