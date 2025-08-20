@@ .. @@
 export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
-  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from your auth context
+  const [isLoggedIn, setIsLoggedIn] = useState(false)
+  const [user, setUser] = useState<any>(null)
   const pathname = usePathname()

+  React.useEffect(() => {
+    const token = localStorage.getItem('token')
+    const userData = localStorage.getItem('user')
+    if (token && userData) {
+      setIsLoggedIn(true)
+      setUser(JSON.parse(userData))
+    }
+  }, [])

+  const handleSignOut = () => {
+    localStorage.removeItem('token')
+    localStorage.removeItem('user')
+    setIsLoggedIn(false)
+    setUser(null)
+    window.location.href = '/'
+  }

   const navItems = [
@@ .. @@
   return (
-    <nav className="sticky top-0 z-50 border-b border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
+    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <Link href="/" className="flex items-center space-x-3">
             <div
-              className="w-10 h-10 rounded-lg flex items-center justify-center"
-              style={{ backgroundColor: "#3C415C" }}
+              className="w-10 h-10 rounded-lg flex items-center justify-center gradient-bg-primary professional-shadow"
             >
-              <Brain className="w-6 h-6" style={{ color: "#B4A5A5" }} />
+              <Brain className="w-6 h-6 text-white" />
             </div>
             <div>
-              <h1 className="text-xl font-bold" style={{ color: "#B4A5A5" }}>
+              <h1 className="text-xl font-bold text-white">
                 CareerSync AI
               </h1>
             </div>
@@ .. @@
                 <Link
                   key={item.name}
                   href={item.href}
-                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
-                    isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
+                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
+                    isActive(item.href) 
+                      ? "text-white bg-white/10 backdrop-blur-sm" 
+                      : "text-gray-300 hover:text-white hover:bg-white/5"
                   }`}
-                  style={isActive(item.href) ? { backgroundColor: "#3C415C" } : {}}
                 >
                   {item.icon && <item.icon className="w-4 h-4" />}
                   <span>{item.name}</span>
@@ .. @@
           <div className="hidden md:flex items-center space-x-4">
             {isLoggedIn ? (
               <div className="flex items-center space-x-4">
-                <Badge variant="outline" className="border-green-500 text-green-300">
+                <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                   <User className="w-3 h-3 mr-1" />
-                  Student
-                </Badge>
+                  <span className="text-green-300 text-sm font-medium">{user?.name || 'Student'}</span>
+                </div>
                 <div className="flex items-center space-x-2">
-                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
+                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                     <Settings className="w-4 h-4" />
                   </Button>
                   <Button
                     variant="ghost"
                     size="sm"
-                    className="text-gray-300 hover:text-white"
-                    onClick={() => setIsLoggedIn(false)}
+                    className="text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
+                    onClick={handleSignOut}
                   >
                     <LogOut className="w-4 h-4" />
                   </Button>
@@ .. @@
             ) : (
               <>
                 <Link href="/signin">
-                  <Button variant="ghost" className="text-gray-300 hover:text-white">
+                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                     Sign In
                   </Button>
                 </Link>
                 <Link href="/signup">
-                  <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
+                  <Button className="text-white gradient-bg-primary professional-shadow hover:scale-105 transition-all duration-300">
                     Get Started
                   </Button>
                 </Link>
@@ .. @@
           <div className="md:hidden">
             <Button
               variant="ghost"
               size="sm"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
-              className="text-gray-300 hover:text-white"
+              className="text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
             >
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </Button>
@@ .. @@
         {/* Mobile Navigation */}
         {isMenuOpen && (
-          <div className="md:hidden py-4 border-t border-gray-700">
+          <div className="md:hidden py-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
             <div className="space-y-2">
               {navItems.map((item) => {
                 if (item.protected && !isLoggedIn) return null
@@ -185,9 +205,9 @@ export function Navbar() {
                   <Link
                     key={item.name}
                     href={item.href}
-                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
-                      isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
+                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
+                      isActive(item.href) ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                     }`}
-                    style={isActive(item.href) ? { backgroundColor: "#3C415C" } : {}}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {item.icon && <item.icon className="w-4 h-4" />}
@@ .. @@
             <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
               {isLoggedIn ? (
                 <>
                   <div className="px-3 py-2">
-                    <Badge variant="outline" className="border-green-500 text-green-300">
+                    <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                       <User className="w-3 h-3 mr-1" />
-                      Student Account
-                    </Badge>
+                      <span className="text-green-300 text-sm font-medium">{user?.name || 'Student'}</span>
+                    </div>
                   </div>
-                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
+                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                     <Settings className="w-4 h-4 mr-2" />
                     Settings
                   </Button>
                   <Button
                     variant="ghost"
-                    className="w-full justify-start text-gray-300 hover:text-white"
+                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                     onClick={() => {
-                      setIsLoggedIn(false)
+                      handleSignOut()
                       setIsMenuOpen(false)
                     }}
                   >
@@ .. @@
                 <>
                   <Link href="/signin">
                     <Button
                       variant="ghost"
-                      className="w-full justify-start text-gray-300 hover:text-white"
+                      className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Sign In
@@ -235,7 +255,7 @@ export function Navbar() {
                   <Link href="/signup">
                     <Button
-                      className="w-full text-white"
-                      style={{ backgroundColor: "#3C415C" }}
+                      className="w-full text-white gradient-bg-primary professional-shadow"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Get Started