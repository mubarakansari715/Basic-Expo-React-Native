# Basic Expo React Native App with Navigation

A comprehensive guide to implementing navigation in React Native using Expo Router.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Navigation Architecture](#navigation-architecture)
- [File Structure](#file-structure)
- [Navigation Implementation](#navigation-implementation)
- [Key Components & Methods](#key-components--methods)
- [Setup Instructions](#setup-instructions)
- [Navigation Examples](#navigation-examples)

## 🚀 Project Overview

This project demonstrates the implementation of navigation in a React Native app using **Expo Router**, which is built on top of React Navigation. The app uses a file-based routing system that automatically generates routes based on the file structure in the `app/` directory.

## 🧭 Navigation Architecture

### Navigation System Used: **Expo Router**

Expo Router provides:
- **File-based routing**: Routes are automatically created based on file structure
- **TypeScript support**: Full type safety for navigation
- **Nested navigation**: Support for complex navigation patterns
- **Deep linking**: Built-in support for URL-based navigation

### Key Navigation Dependencies

```json
{
  "expo-router": "~5.1.0",
  "@react-navigation/native": "^7.1.6",
  "@react-navigation/bottom-tabs": "^7.3.10",
  "@react-navigation/elements": "^2.3.8",
  "@expo/vector-icons": "^14.1.0",
  "react-native-screens": "~4.11.1",
  "react-native-safe-area-context": "5.4.0",
  "react-native-gesture-handler": "~2.24.0"
}
```

## 📁 File Structure

```
app/
├── _layout.tsx              # Root layout component (Stack Navigator)
├── index.tsx               # Initial screen (/)
├── about/
│   └── index.tsx           # About screen (/about)
└── (tabs)/                 # Tab navigation group
    ├── _layout.tsx         # Tab navigator layout
    ├── index.tsx           # Home tab screen
    ├── aboutus.tsx         # About Us tab screen
    └── profile.tsx         # Profile tab screen
```

### How File-Based Routing Works:

1. **`app/_layout.tsx`** → Root Stack navigator that contains tab navigation
2. **`app/(tabs)/_layout.tsx`** → Tab navigator layout with 3 tabs
3. **`app/(tabs)/index.tsx`** → Home tab screen
4. **`app/(tabs)/aboutus.tsx`** → About Us tab screen  
5. **`app/(tabs)/profile.tsx`** → Profile tab screen
6. **`app/index.tsx`** → Initial screen before entering tabs
7. **`app/about/index.tsx`** → Standalone About screen

## 🔧 Navigation Implementation

### 1. Root Layout (`app/_layout.tsx`)

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about/index" options={{ title: "About Us" }} />
    </Stack>
  );
}
```

**Explanation:**
- **`Stack`**: Creates a stack navigator that contains the tab navigation
- **`headerShown: false`**: Hides the stack header to show tab navigation cleanly
- **`(tabs)`**: Groups tab screens using Expo Router's group syntax
- **Additional screens**: Standalone screens outside of tab navigation

### 2. Tab Layout (`app/(tabs)/_layout.tsx`)

```tsx
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabRoots = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aboutus"
        options={{
          title: "About us",
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: "white",
                  bottom: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'gray',
                  borderWidth: StyleSheet.hairlineWidth
                }}
              >
                <FontAwesome size={28} name="globe" color={color} />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoots;
```

**Explanation:**
- **`Tabs`**: Creates a bottom tab navigator with 3 tabs
- **`FontAwesome`**: Uses vector icons for tab bar icons
- **Custom styling**: The "About us" tab has a custom elevated circular design
- **Tab configuration**: Each tab has a title and custom icon

### 3. Tab Screens

#### Home Tab (`app/(tabs)/index.tsx`)
```tsx
import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
```

#### About Us Tab (`app/(tabs)/aboutus.tsx`)
```tsx
import { View, Text } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <View>
      <Text>AboutUs</Text>
    </View>
  )
}

export default AboutUs
```

#### Profile Tab (`app/(tabs)/profile.tsx`)
```tsx
import { View, Text } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile
```

### 4. Initial Screen (`app/index.tsx`)

```tsx
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>Hello Mubarak Ansari</Text>
      <Link href={'about'}>Go to About</Link>
    </View>
  );
}
```

**Explanation:**
- **Initial screen**: First screen users see before entering tab navigation
- **`Link`**: Navigates to standalone about screen outside tabs

## 🔑 Key Components & Methods

### Navigation Components

#### 1. `<Stack>` Navigator
```tsx
import { Stack } from "expo-router";

<Stack screenOptions={{ headerShown: true }}>
  <Stack.Screen name="index" options={{ title: "Home" }} />
  <Stack.Screen name="about" options={{ title: "About Us" }} />
</Stack>
```

**Properties:**
- **`screenOptions`**: Default options for all screens
- **`initialRouteName`**: Set the default screen
- **Custom headers, animations, gestures**

#### 2. `<Link>` Component
```tsx
import { Link } from "expo-router";

// Basic navigation
<Link href="/about">Go to About</Link>

// With parameters
<Link href="/profile/123">View Profile</Link>

// External links
<Link href="https://expo.dev">Expo Website</Link>
```

#### 3. `useRouter()` Hook
```tsx
import { useRouter } from "expo-router";

const router = useRouter();

// Programmatic navigation
router.push('/about');        // Navigate forward
router.replace('/login');     // Replace current screen
router.back();               // Go back
router.canGoBack();          // Check if can go back
```

### Navigation Methods

#### 1. **Push Navigation**
```tsx
router.push('/about');
// Adds new screen to stack, can go back
```

#### 2. **Replace Navigation**
```tsx
router.replace('/login');
// Replaces current screen, cannot go back
```

#### 3. **Reset Navigation**
```tsx
router.dismissAll();
router.replace('/home');
// Clear all screens and start fresh
```

### Advanced Navigation Patterns

#### 1. **Tab Navigation Implementation**

Your current app implements a sophisticated tab navigation pattern:

```
Root Stack Navigator
└── Tab Navigator (3 tabs)
    ├── Home Tab
    ├── About Us Tab (with elevated custom icon)
    └── Profile Tab
```

**Key Features:**
- **Grouped Routes**: Using `(tabs)` folder for file-based tab routing
- **Custom Icons**: FontAwesome vector icons for each tab
- **Elevated Design**: Special floating design for the "About Us" tab
- **Stack + Tabs**: Hybrid navigation combining stack and tab patterns

#### 2. **Custom Tab Icon Implementation**

```tsx
// Standard tab icon
tabBarIcon: ({ color }) => (
  <FontAwesome size={28} name="home" color={color} />
)

// Custom elevated tab icon
tabBarIcon: ({ color, size }) => {
  return (
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: "white",
      bottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth
    }}>
      <FontAwesome size={28} name="globe" color={color} />
    </View>
  );
}
```

#### 3. **Nested Navigation Structure**
```
app/
├── _layout.tsx              # Root Stack Navigator
├── index.tsx               # Initial screen
├── about/
│   └── index.tsx           # Standalone about screen
└── (tabs)/                 # Tab navigation group
    ├── _layout.tsx         # Tab Navigator
    ├── home.tsx            # Tab screen
    ├── aboutus.tsx         # Tab screen  
    └── profile.tsx         # Tab screen
```

#### 4. **Alternative Tab Navigation**
```tsx
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="aboutus" 
        options={{ 
          title: "About Us",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="globe" color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle-o" color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}
```

**Tab Features:**
- **Vector Icons**: FontAwesome icons for each tab
- **Custom Styling**: Support for elevated/floating tab designs
- **Dynamic Colors**: Icons change color based on active/inactive state

**Find More Icons:**
- [React Native Vector Icons Directory](https://oblador.github.io/react-native-vector-icons/) - Browse all available FontAwesome and other icon sets

#### 5. **Drawer Navigation**
```tsx
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="home" options={{ title: "Home" }} />
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
    </Drawer>
  );
}
```

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
# Install Expo CLI
npm install -g @expo/cli

# Install project dependencies
npm install
```

### 2. Configure Navigation
Ensure these packages are installed:
```bash
npx expo install expo-router react-native-screens react-native-safe-area-context @expo/vector-icons
```

### 3. Update `package.json`
```json
{
  "main": "expo-router/entry"
}
```

### 4. Run the App
```bash
# Start development server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web
```

## 📱 Navigation Examples

### Basic Navigation Flow

1. **App starts** → `app/index.tsx` (Initial screen with welcome message)
2. **User navigates** → `app/(tabs)/` (Tab navigation with 3 tabs)
3. **Tab Navigation**:
   - **Home Tab** → `app/(tabs)/index.tsx`
   - **About Us Tab** → `app/(tabs)/aboutus.tsx` (with custom elevated icon)
   - **Profile Tab** → `app/(tabs)/profile.tsx`
4. **Standalone Navigation** → `app/about/index.tsx` (Outside tab structure)

### Programmatic Navigation Example

```tsx
import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function MyScreen() {
  const router = useRouter();

  const handleNavigation = () => {
    // Navigate with animation
    router.push('/about');
    
    // Navigate with parameters
    router.push('/profile/123');
    
    // Navigate and replace
    router.replace('/login');
  };

  return (
    <Button title="Navigate" onPress={handleNavigation} />
  );
}
```

### Navigation with Parameters

```tsx
// Navigate with parameters
<Link href="/profile/123?tab=settings">Profile Settings</Link>

// Access parameters in target screen
import { useLocalSearchParams } from "expo-router";

export default function Profile() {
  const { id, tab } = useLocalSearchParams();
  return <Text>Profile {id}, Tab: {tab}</Text>;
}
```

## 🎯 Navigation Best Practices

1. **Use TypeScript**: Leverage type-safe navigation
2. **File Organization**: Keep related screens in folders
3. **Consistent Naming**: Use clear, descriptive file names
4. **Error Boundaries**: Handle navigation errors gracefully
5. **Deep Linking**: Support URL-based navigation
6. **Performance**: Use lazy loading for large apps

## 🔍 Debugging Navigation

```tsx
// Debug current route
import { usePathname, useSegments } from "expo-router";

export default function DebugScreen() {
  const pathname = usePathname();
  const segments = useSegments();
  
  console.log("Current path:", pathname);
  console.log("Route segments:", segments);
  
  return null;
}
```

## 📚 Additional Resources

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Expo Router Examples](https://github.com/expo/router)
- [React Native Vector Icons Directory](https://oblador.github.io/react-native-vector-icons/) - Complete icon gallery for FontAwesome, MaterialIcons, Ionicons, and more

---

**Author**: Mubarak Ansari  
**Project**: Basic Expo React Native Navigation  
**Last Updated**: June 26, 2025