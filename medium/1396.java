class UndergroundSystem {
    private HashMap<Integer, Pair<String, Integer>> customers;
    private HashMap<String, Pair<Integer, Integer>> dists;

    public UndergroundSystem() {
        customers = new HashMap<>();
        dists = new HashMap<>();
    }
    
    public void checkIn(int id, String stationName, int t) {
        customers.put(id, new Pair(stationName, t));
    }
    
    public void checkOut(int id, String stationName, int t) {
        if(customers.containsKey(id)){
            Pair<String, Integer> pair = customers.get(id);
            String trip = pair.getKey() + ',' + stationName;
            if(dists.containsKey(trip)){
                Pair<Integer, Integer> p = dists.get(trip);
                dists.put(trip, new Pair<Integer, Integer>(p.getKey() + t - pair.getValue(), p.getValue() + 1));
            }
            else
                dists.put(trip, new Pair<Integer, Integer>(t - pair.getValue(), 1));
            customers.remove(id);
        }
    }
    
    public double getAverageTime(String startStation, String endStation) {
        String trip = startStation + ',' + endStation;
        if(dists.containsKey(trip)){
            Pair<Integer, Integer> pair = dists.get(trip);
            return (double) pair.getKey() / pair.getValue();
        }   
        return -1;
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * UndergroundSystem obj = new UndergroundSystem();
 * obj.checkIn(id,stationName,t);
 * obj.checkOut(id,stationName,t);
 * double param_3 = obj.getAverageTime(startStation,endStation);
 */